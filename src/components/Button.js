import React from 'react'
import { css } from 'emotion'

const styles = css({
  height: '40px',
  border: 0,
  borderRadius: '5px',
  width: '100%',
  backgroundColor: '#4CAF50',
  color: 'white',
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
