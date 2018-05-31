import React from 'react'
import { css } from 'emotion'

import * as colors from '../helpers/colors'

const styles = css({
  width: '80%',
  backgroundColor: colors.white,
  paddingBottom: '25px',
  paddingLeft: '15px',
  paddingRight: '15px',
  boxShadow: colors.cardShadow,
  zIndex: 1,

  '.card': {
    '&__title': {
      color: colors.darkGrey,
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
