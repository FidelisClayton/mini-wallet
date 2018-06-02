import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import LabeledInput from './LabeledInput'
import Button from './Button'

import * as colors from '../helpers/colors'

import { createTransaction } from '../database/transactions'

const styles = css({
  '.exchange-form': {
    '&__details': {
      display: 'flex',
      justifyContent: 'space-between',
      textTransform: 'uppercase',
      marginTop: '5px',
      marginBottom: '5px'
    },

    '&__label': {
      fontWeight: 'bold',
      color: colors.lightBlue
    },

    '&__value': {
      fontWeight: 'bold',
      color: colors.darkBlue
    },

    '&__form': {
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: `1px solid ${colors.lightGrey}`
    },

    '&__summary': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
      paddingBottom: '20px',
      marginTop: '20px',
      paddingTop: '20px',
      borderBottom: `1px solid ${colors.lightGrey}`,
      borderTop: `1px solid ${colors.lightGrey}`
    }
  }
})

const initialState = {
  data: {
    amount: 0
  },
  errors: []
}

export default class ExchangeForm extends Component {
  state = initialState

  checkAmountLimit = (value, limit) => {
    if (value > limit) {
      return {
        field: 'amount',
        message: `A venda não pode ser efetuada pois seu saldo de ${this.props.wallet.name} é insuficiente`
      }
    }

    return
  }

  handleInputChange = (inputName) => (event) => {
    const value = event.target.value

    const errors = [
      this.checkAmountLimit(value, this.props.wallet.balance)
    ]
      .filter(Boolean)

    this.setState({
      data: {
        ...this.state.data,
        [inputName]: event.target.value
      },
      errors
    })
  }

  getErrorForField = (fieldName) => {
    const error = this.state.errors.find(error => error.field === fieldName) || {}

    return error.message
  }

  sell = (amount, wallet, prices) => {
    const transaction = {
      fromCoin: {
        token: wallet.token,
        name: wallet.name
      },
      toCoin: {
        token: 'BRL',
        name: 'Real'
      },
      fromAmount: amount,
      toAmount: amount * prices.sell,
      toPrice: prices.sell,
      date: new Date(),
    }
  }

  render () {
    const {
      errors,
      data: {
        amount
      }
    } = this.state

    const {
      wallet,
      prices
    } = this.props

    const canTrade =
      this.state.errors.length === 0 && this.state.data.amount > 0

    return (
      <div className={`exchange-form ${styles}`}>
        <div className="exchange-form__details">
          <span className="exchange-form__label">Valor do { wallet.token }:</span>
          <span className="exchange-form__value">R$ { prices.sell }</span>
        </div>

        <div className="exchange-form__details">
          <span className="exchange-form__label">Quantidade disponível</span>
          <span className="exchange-form__value">{ wallet.balance } { wallet.token }</span>
        </div>

        <div className="exchange-form__form">
          <LabeledInput
            label="Quantidade a ser vendida"
            inputType="number"
            onChange={this.handleInputChange('amount')}
            inputProps={{
              defaultValue: amount
            }}
            error={this.getErrorForField('amount')}
          />

          <div className="exchange-form__summary">
            <span className="exchange-form__label">
              { String(amount) } { wallet.token } <small>x</small> { prices.sell } BRL
            </span>

            <span className="exchange-form__value">
              Total: { amount * prices.sell } BRL
            </span>
          </div>

          <Button
            disabled={!canTrade}
            onClick={() => this.sell(amount, wallet, prices)}
          >
            Vender
          </Button>
        </div>
      </div>
    )
  }
}
