import React from 'react'
import { css } from 'emotion'

const styles = css({
  width: '80%',
  backgroundColor: '#FFF',
  paddingBottom: '25px',
  paddingLeft: '15px',
  paddingRight: '15px',
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.3)',
  zIndex: 1,

  '.card': {
    '&__title': {
      color: '#4e4e4e',
      paddingTop: '15px',
      marginTop: '0',
      fontSize: '1.2rem',

      '&--bottom': {
        marginBottom: 0,
        paddingBottom: '15px'
      }
    },

    '&__submit': {
      marginTop: '30px',
    }
  },
})

const Card = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`${styles} ${className} card`}
      {...props}
    >
      { children }
    </div>
  )
}

export default Card
