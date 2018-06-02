import React, { Component } from 'react'
import { connect } from 'react-redux'

import Currency from '../components/Currency'
import ExchangeForm from '../components/ExchangeForm'

import {
  openModal,
  closeModal
} from '../store/actions/modal'

import { createTransaction } from '../store/actions/transactions'
import { fetchUser } from '../store/actions/user'

export class Currencies extends Component {
  makeTransaction = userId => transaction => {
    return this.props.createTransaction(transaction, userId)
      .then(() => this.props.fetchUser(userId))
  }

  handleSell = (wallet, prices) => {
    this.props.openModal({
      children: (
        <ExchangeForm
          wallet={wallet}
          prices={prices}
          onSell={this.makeTransaction(this.props.user._id)}
          closeModal={this.props.closeModal}
          type="sell"
        />
      ),
      title: `Vender ${wallet.name}`
    })
  }

  handleBuy = (wallet, prices) => {
    const realWallet = this.props.wallets.find(wallet => wallet.id === 'brl')

    this.props.openModal({
      children: (
        <ExchangeForm
          wallet={wallet}
          prices={prices}
          realWallet={realWallet}
          onBuy={this.makeTransaction(this.props.user._id)}
          closeModal={this.props.closeModal}
          type="buy"
        />
      ),
      title: `Comprar ${wallet.name}`
    })
  }

  render () {
    return (
      <div className="home__currencies">
        { this.props.wallets.map(wallet => {
          const prices = this.props.prices.tokens[wallet.token.toLowerCase()]
          const total = wallet.balance * prices.sell

          return (
            <Currency
              key={wallet.token}
              name={wallet.name}
              prices={prices}
              total={total}
              amount={wallet.balance}
              exchangeable={wallet.exchangeable}
              currency={wallet.token}
              onSell={() => this.handleSell(wallet, prices)}
              onBuy={() => this.handleBuy(wallet, prices)}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({
  auth,
  prices
}) => ({
  user: auth.user,
  wallets: auth.user.wallets,
  prices
})

export default connect(
  mapStateToProps,
  {
    openModal,
    closeModal,
    createTransaction,
    fetchUser
  }
)(Currencies)
