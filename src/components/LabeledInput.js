import React, { Component } from 'react'
import { css } from 'emotion'

import * as colors from '../helpers/colors'

const styles = css({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',
  marginBottom: '10px',
  color: colors.darkGrey,
  textAlign: 'left',
  textTransform: 'uppercase',
  fontSize: '0.8rem',
  position: 'relative',

  '.c-labeled-input': {
    '&__input': {
      height: '35px',
      borderRadius: '5px',
      border: `2px solid ${colors.grey}`,
      outline: 'none',
      marginTop: '5px',
      fontSize: '1rem',
      color: colors.darkGrey,
      paddingLeft: '10px',
      paddingRight: '10px',
      transition: '300ms ease-in-out border-color 100ms',

      '&:focus': {
        borderColor: colors.darkGreen
      },

      '&--error': {
        borderColor: colors.red,

        '&:focus': {
          borderColor: colors.red
        },
      }
    },

    '&__show-password': {
      position: 'absolute',
      zIndex: 2,
      right: 0,
      top: '20px',
      lineHeight: '40px',
      paddingRight: '10px',
      paddingLeft: '10px',
      fontSize: '0.6rem',
    },

    '&__error': {
      marginTop: '5px',
      color: colors.red,
      fontWeight: 'bold'
    },

    '&__bottom-message': {
      fontWeight: 'bold',
      marginTop: '5px'
    }
  }
})

export default class LabeledInput extends Component {
  state = {
    showPassword: false
  }

  showPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  getInputType = (type) => {
    if (type === 'password') {
      return this.state.showPassword ? 'text' : 'password'
    }

    return type
  }

  render () {
    const {
      label,
      inputType,
      inputProps,
      error,
      bottomMessage,
      ...props
    } = this.props

    const inputClasses = [
      'c-labeled-input__input',
      error && 'c-labeled-input__input--error'
    ]
      .filter(className => !!className)
      .join(' ')

    return (
      <div
        className={`c-labeled-input ${styles}`}
        {...props}
      >
        <label>{ label }</label>

        { inputType === 'password' && !this.state.showPassword && (
          <span
            className="c-labeled-input__show-password"
            onClick={this.showPassword}
          >
            Mostrar
          </span>
        )}

        { inputType === 'password' && this.state.showPassword && (
          <span
            className="c-labeled-input__show-password"
            onClick={this.showPassword}
          >
            Esconder
          </span>
        )}

        <input
          className={inputClasses}
          type={this.getInputType(inputType)}
          name={label}
          {...inputProps}
        />

        { bottomMessage && (
          <span className="c-labeled-input__bottom-message">{ bottomMessage }</span>
        )}

        { error && (
          <span className="c-labeled-input__error">{ error }</span>
        )}
      </div>
    )
  }
}
