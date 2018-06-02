import React, { Component } from 'react'
import { css } from 'emotion'

import LabeledInput from './LabeledInput'
import Button from './Button'

import * as colors from '../helpers/colors'

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
    const coinName =
      this.props.type === 'sell'
        ? this.props.wallet.name
        : this.props.realWallet.name

    if (value > limit) {
      return {
        field: 'amount',
        message: `A venda não pode ser efetuada pois seu saldo de ${coinName} é insuficiente`
      }
    }

    return
  }

  handleInputChange = (inputName) => (event) => {
    const value = event.target.value

    const limit =
      this.props.type === 'sell'
        ? this.props.wallet.balance
        : this.props.realWallet.balance

    const amount =
      this.props.type === 'sell'
        ? value
        : value * this.props.prices.sell

    const errors = [
      this.checkAmountLimit(amount, limit)
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

    this.props.onSell(transaction)
      .then(this.reset)
      .then(this.props.closeModal)
  }

  buy = (amount, wallet, prices) => {
    const transaction = {
      fromCoin: {
        token: this.props.realWallet.token,
        name: this.props.realWallet.name
      },
      toCoin: {
        token: wallet.token,
        name: wallet.name
      },
      fromAmount: amount * prices.sell,
      toAmount: amount,
      toPrice: prices.buy,
      date: new Date(),
    }

    this.props.onBuy(transaction)
      .then(this.reset)
      .then(this.props.closeModal)
  }

  reset = () => {
    this.setState(initialState)
  }

  renderSellDetails = () => (
    <React.Fragment>
      <div className="exchange-form__details">
        <span className="exchange-form__label">Valor do { this.props.wallet.token }:</span>
        <span className="exchange-form__value">R$ { this.props.prices.sell }</span>
      </div>

      <div className="exchange-form__details">
        <span className="exchange-form__label">Quantidade disponível</span>
        <span className="exchange-form__value">{ this.props.wallet.balance } { this.props.wallet.token }</span>
      </div>
    </React.Fragment>
  )

  renderBuyDetails = () => (
    <React.Fragment>
      <div className="exchange-form__details">
        <span className="exchange-form__label">Saldo disponível</span>
        <span className="exchange-form__value">{ this.props.realWallet.balance } { this.props.realWallet.token }</span>
      </div>

      <div className="exchange-form__details">
        <span className="exchange-form__label">Valor do { this.props.wallet.token }:</span>
        <span className="exchange-form__value">R$ { this.props.prices.sell }</span>
      </div>
    </React.Fragment>
  )

  renderSellButton = (canTrade) => (
    <Button
      disabled={!canTrade}
      onClick={() => this.sell(Number(this.state.data.amount), this.props.wallet, this.props.prices)}
    >
      Vender
    </Button>
  )

  renderBuyButton = (canTrade) => (
    <Button
      disabled={!canTrade}
      onClick={() => this.buy(Number(this.state.data.amount), this.props.wallet, this.props.prices)}
    >
      Comprar
    </Button>
  )

  render () {
    const {
      data: {
        amount
      }
    } = this.state

    const {
      wallet,
      prices,
      type
    } = this.props

    const canTrade =
      this.state.errors.length === 0 && this.state.data.amount > 0

    const isSelling = type === 'sell'

    return (
      <div className={`exchange-form ${styles}`}>
        { isSelling && this.renderSellDetails() }
        { !isSelling && this.renderBuyDetails() }

        <div className="exchange-form__form">
          <LabeledInput
            label={isSelling ? 'Quantidade a ser vendida' : 'Quantidade a ser comprada'}
            inputType="number"
            onChange={this.handleInputChange('amount')}
            inputProps={{
              defaultValue: amount
            }}
            error={this.getErrorForField('amount')}
          />

          <div className="exchange-form__summary">
            <span className="exchange-form__label">
              { amount } { wallet.token } <small>x</small> { prices.sell } BRL
            </span>

            <span className="exchange-form__value">
              Total: { amount * prices.sell } BRL
            </span>
          </div>

          { isSelling && this.renderSellButton(canTrade) }
          { !isSelling && this.renderBuyButton(canTrade) }
        </div>
      </div>
    )
  }
}

ExchangeForm.defaultProps = {
  type: 'sell'
}
