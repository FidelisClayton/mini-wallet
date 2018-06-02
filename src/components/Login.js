import React, { Component } from 'react'
import { css } from 'emotion'
import md5 from 'md5'

import Button from './Button'
import LabeledInput from './LabeledInput'
import Card from './Card'

import * as colors from '../helpers/colors'

const styles = css({
  transition: `
    500ms ease margin-top 200ms,
    500ms ease transform
  `,

  '.login': {
    '&__error': {
      color: colors.red,
      fontWeight: 'bold'
    },
  },

  '&.login--inactive': {
    position: 'absolute',
    marginTop: '-100px',
    transform: 'scale(0.90)',
    zIndex: 0
  },

  '.card__title': {
    cursor: 'pointer'
  }
})

const initialState = {
  data: {
    email: '',
    password: '',
  },
  errors: []
}

export class Login extends Component {
  state = initialState

  get classNames () {
    const classNames = [
      'login',
      !this.props.active && 'login--inactive',
      styles
    ]
      .filter(className => !!className)
      .join(' ')

    return classNames
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const data = this.state.data

    this.props.onSubmit({
      email: data.email,
      password: md5(data.password)
    })
  }

  handleInputChange = (inputName) => (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [inputName]: event.target.value
      }
    })
  }

  render () {
    const {
      active,
      onClick,
      error
    } = this.props

    return (
      <Card className={this.classNames}>
        <h4
          className="card__title"
          onClick={onClick}
        >
          Login
        </h4>

        <form onSubmit={this.handleSubmit}>
          <LabeledInput
            label="Email"
            inputType="email"
            onChange={this.handleInputChange('email')}
            inputProps={{
              defaultValue: this.state.data.email
            }}
          />

          <LabeledInput
            label="Senha"
            inputType="password"
            onChange={this.handleInputChange('password')}
            inputProps={{
              defaultValue: this.state.data.password
            }}
          />

          { active && error && (
            <span className="login__error">{ error }</span>
          )}

          <div className="card__submit">
            <Button>
              Entrar
            </Button>
          </div>
        </form>
      </Card>
    )
  }
}

export default Login
