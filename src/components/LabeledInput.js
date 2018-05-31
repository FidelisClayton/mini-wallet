import React from 'react'
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
  fontSize: '0.7rem',
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
    }
  }
})

const LabeledInput = ({
  label,
  inputType,
  inputProps,
  ...props
}) => {
  return (
    <div
      className={`c-labeled-input ${styles}`}
      {...props}
    >
      <label>{ label }</label>

      { inputType === 'password' && (
        <span className="c-labeled-input__show-password">Mostrar</span>
      )}

      <input
        className="c-labeled-input__input"
        type={inputType}
        name={label}
        {...inputProps}
      />
    </div>
  )
}

export default LabeledInput
