import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import Button from './Button'
import ArrowIcon from './ArrowIcon'

import * as colors from '../helpers/colors'
import * as breakpoints from '../helpers/breakpoints'
import moneyFormat from '../helpers/formaters'

const styles = css({
  display: 'flex',
  marginTop: '10px',
  borderRadius: '5px',
  backgroundColor: colors.white,
  border: colors.cardBorder,

  ...breakpoints.medium({
    flexDirection: 'column',
    flex: 1,
    marginLeft: '5px',
    marginRight: '5px'
  }),

  '.currency': {
    '&__data': {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,

      ...breakpoints.medium({
        marginBottom: '15px'
      }),

      '&--right': {
        textAlign: 'right',

        ...breakpoints.medium({
          textAlign: 'center'
        })
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

      ...breakpoints.medium({
        flexDirection: 'column',
        textAlign: 'center',
        paddingLeft: '5px',
        paddingRight: '5px'
      }),
    },

    '&__actions': {
      display: 'flex',

      ...breakpoints.medium({
        flexDirection: 'column',
        alignItems: 'center'
      })
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

      ...breakpoints.medium({
        flexDirection: 'row',
        height: '35px',
        width: '80%',
        marginBottom: '10px',
      }),

      '&--sell': {
        background: colors.darkBlue
      }
    },

    '&__action-icon': {
      marginBottom: '5px',
      width: '15px',
      height: '15px',

      ...breakpoints.medium({
        marginRight: '10px'
      }),

      '&--sell': {
        transform: 'rotate(180deg)'
      }
    },

    '&__coin, &__total': {
      fontWeight: 'bold',
      color: colors.darkBlue
    },

    '&__price, &__amount': {
      display: 'inline',
      fontWeight: 'bold',
      fontSize: '0.8rem',
      color: colors.lightBlue
    }
  },
})

const Currency = ({
  name,
  prices,
  total,
  amount,
  currency,
  exchangeable,
  onSell,
  onBuy,
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

          { exchangeable && prices && (
            <label className="currency__label currency__price">
              R$ { moneyFormat.brl(prices.sell) }
            </label>
          )}
        </div>

        <div className="currency__data currency__data--right">
          <label className="currency__label currency__total">R$ { moneyFormat.brl(total) }</label>
          { amount !== null && (
            <label className="currency__label currency__amount">
              { currency } { moneyFormat[currency.toLowerCase()](amount) }
            </label>
          )}
        </div>
      </div>

      { exchangeable && (
        <div className="currency__actions">
          <Button
            className="currency__action-button"
            onClick={onBuy}
          >
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
  styles: PropTypes.string,
  onSell: PropTypes.func,
  onBuy: PropTypes.func
}

export default Currency
