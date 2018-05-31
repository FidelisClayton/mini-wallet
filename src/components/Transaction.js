import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { css } from 'emotion'

import * as colors from '../helpers/colors'

const styles = css({
  display: 'flex',
  justifyContent: 'space-around',
  paddingTop: '15px',
  paddingBottom: '15px',
  marginTop: '10px',
  borderRadius: '5px',
  border: colors.cardBorder,
  backgroundColor: colors.white,

  '.transaction': {
    '&__data': {
      textAlign: 'center'
    },

    '&__price': {
      display: 'block',
      fontWeight: 'bold',
      fontSize: '0.7rem',
      color: colors.lightBlue,
    },

    '&__amount': {
      fontSize: '1.3rem',
      color: colors.darkBlue
    },

    '&__label': {
      color: colors.lightBlue,
      textTransform: 'uppercase',
      fontSize: '0.8rem',
      fontWeight: 'bold'
    }
  }
})

const Transaction = ({
  fromCoin,
  fromAmount,
  toCoin,
  toAmount,
  toPrice,
  date,
  className,
  ...props
}) => {
  return (
    <div className={`transaction ${styles} ${className}`}>
      <div className="transaction__data transaction__from">
        <label className="transaction__label">Trocou</label>
        <span className="transaction__price"><span className="transaction__amount">{ fromAmount }</span> { fromCoin }</span>
        <label className="transaction__label">{ moment(date).format('DD/MM/YYYY HH:MM') }</label>
      </div>

      <div className="transaction__data transaction__to">
        <label className="transaction__label">Por</label>
        <span className="transaction__price"><span className="transaction__amount">{ toAmount }</span> { toCoin }</span>
        <label className="transaction__label">( { toPrice } BRL )</label>
      </div>
    </div>
  )
}

Transaction.propTypes = {
  fromCoin: PropTypes.string.isRequired,
  fromAmount: PropTypes.number.isRequired,
  toCoin: PropTypes.string.isRequired,
  toAmount: PropTypes.number.isRequired,
  toPrice: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  className: PropTypes.string
}

export default Transaction
