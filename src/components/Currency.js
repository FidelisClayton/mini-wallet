import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import Button from './Button'
import ArrowIcon from './ArrowIcon'

import * as colors from '../helpers/colors'

const styles = css({
  display: 'flex',
  marginTop: '10px',
  borderRadius: '5px',
  backgroundColor: colors.white,
  border: colors.cardBorder,

  '.currency': {
    '&__data': {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,

      '&--right': {
        textAlign: 'right'
      }
    },

    '&__info': {
      display: 'flex',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingLeft: '15px',
      paddingRight: '15px',
      flex: 1,
      width: '100%',
    },

    '&__actions': {
      display: 'flex'
    },

    '&__action-button': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      borderRadius: 0,
      width: '70px',
      fontSize: '0.7rem',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      border: 0,
      outline: 'none',

      '&--sell': {
        background: colors.darkBlue
      }
    },

    '&__action-icon': {
      marginBottom: '5px',
      width: '15px',
      height: '15px',

      '&--sell': {
        transform: 'rotate(180deg)'
      }
    },

    '&__coin, &__total': {
      fontWeight: 'bold',
      color: colors.darkBlue
    },

    '&__price, &__amount': {
      fontWeight: 'bold',
      fontSize: '0.8rem',
      color: colors.lightBlue
    }
  }
})

const Currency = ({
  name,
  price,
  total,
  amount,
  currency,
  exchangeable,
  onSell,
  ...props
}) => {
  return (
    <div
      className={`currency ${styles}`}
      {...props}
    >
      <div className="currency__info">
        <div className="currency__data">
          <label className="currency__label currency__coin">{ name }</label>

          { exchangeable && price && (
            <label className="currency__label currency__price">R$ { price }</label>
          )}
        </div>

        <div className="currency__data currency__data--right">
          <label className="currency__label currency__total">R$ { total }</label>
          { amount !== null && (
            <label className="currency__label currency__amount">{ currency } { amount }</label>
          )}
        </div>
      </div>

      { exchangeable && (
        <div className="currency__actions">
          <Button className="currency__action-button">
            <ArrowIcon className="currency__action-icon" />
            Comprar
          </Button>
          <Button
            className="currency__action-button currency__action-button--sell"
            onClick={onSell}
          >
            <ArrowIcon className="currency__action-icon currency__action-icon--sell" />
            Vender
          </Button>
        </div>
      )}
    </div>
  )
}

Currency.defaultProps = {
  exchangeable: true
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  total: PropTypes.number,
  amount: PropTypes.amount,
  styles: PropTypes.string
}

export default Currency
