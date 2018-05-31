import React from 'react'
import { css } from 'emotion'

import * as colors from '../helpers/colors'

const styles = css({
  height: '40px',
  border: 0,
  borderRadius: '5px',
  width: '100%',
  backgroundColor: colors.darkGreen,
  color: colors.white,
  fontWeight: 'bold',
  fontSize: '16px'
})

const Button = ({
  children,
  className,
  ...props
}) => (
  <button
    className={`c-button ${styles} ${className}`}
    {...props}
  >
    { children }
  </button>
)

export default Button
