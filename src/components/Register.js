import React, { Component } from 'react'
import { css } from 'emotion'
import md5 from 'md5'

import Button from './Button'
import LabeledInput from './LabeledInput'
import Card from './Card'

const styles = css({
  transition: `
    500ms ease margin-top 300ms,
    500ms ease transform
  `,

  '&.register--inactive': {
    position: 'absolute',
    transform: 'scale(0.90)',
    marginTop: '45px',
    paddingBottom: 0,
    zIndex: 0,
  }
})

const initialState = {
  data: {
    email: '',
    password: '',
    passwordAgain: ''
  },
  errors: []
}

export default class Register extends Component {
  state = initialState

  validatePasswords = (password, passwordAgain) => {
    if(passwordAgain !== '') {
      if (password === passwordAgain) {
        return
      } else {
        return {
          field: 'passwordAgain',
          message: 'As senhas não são iguais'
        }
      }
    }

    return
  }

  validateFields = (data) => {
    const errors = [
      this.validatePasswords(data.password, data.passwordAgain)
    ].filter(error => !!error)

    return errors
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const data = this.state.data

    this.props.onSubmit({
      email: data.email,
      password: md5(data.password),
      onboardingComplete: false
    })
  }

  handleInputChange = (inputName) => (event) => {
    const value = event.target.value

    const updatedData = {
      ...this.state.data,
      [inputName]: value
    }

    const errors = this.validateFields(updatedData)

    this.setState({
      data: {
        ...this.state.data,
        [inputName]: event.target.value
      },
      errors
    })
  }

  getErrorForField = (fieldName) => {
    const error = this.state.errors.find(error => error.field === fieldName) || {}

    return error.message
  }

  reset = () => {
    this.setState(initialState)
  }

  get classNames () {
    const classNames = [
      'register',
      !this.props.active && 'register--inactive',
      styles
    ]
      .filter(className => !!className)
      .join(' ')

    return classNames
  }

  render () {
    return (
      <Card className={this.classNames}>
        <h4 className="card__title">
          Criar Conta
        </h4>

        <LabeledInput
          label="Email"
          inputType="email"
          onChange={this.handleInputChange('email')}
          error={this.getErrorForField('email')}
          inputProps={{
            defaultValue: this.state.data.email
          }}
        />

        <LabeledInput
          label="Senha"
          inputType="password"
          onChange={this.handleInputChange('password')}
          error={this.getErrorForField('password')}
          inputProps={{
            defaultValue: this.state.data.password
          }}
        />

        <LabeledInput
          label="Repita a senha"
          inputType="password"
          onChange={this.handleInputChange('passwordAgain')}
          error={this.getErrorForField('passwordAgain')}
          inputProps={{
            defaultValue: this.state.data.passwordAgain
          }}
        />

        { this.props.active && (
          <div className="card__submit">
            <Button
              type="button"
              onClick={this.handleSubmit}
            >
              Registrar
            </Button>
          </div>
        )}

        { !this.props.active && (
          <h4
            className="card__title card__title--bottom"
            onClick={this.props.onClick}
          >
            Criar Conta
          </h4>
        )}
      </Card>
    )
  }
}
