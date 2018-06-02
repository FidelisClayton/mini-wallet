import React, { Component } from 'react'
import { connect } from 'react-redux'

import Currency from '../components/Currency'
import ExchangeForm from '../components/ExchangeForm'

import { openModal } from '../store/actions/modal'

export class Currencies extends Component {
  handleSell = (wallet, prices) => {
    this.props.openModal({
      children: (
        <ExchangeForm
          wallet={wallet}
          prices={prices}
        />
      ),
      title: `Vender ${wallet.name}`
    })
  }

  render () {
    return (
      <div className="home__currencies">
        { this.props.wallets.map(wallet => {
          const prices = this.props.prices.tokens[wallet.token.toLowerCase()]
          const total = wallet.balance * prices.buy

          return (
            <Currency
              key={wallet.token}
              name={wallet.name}
              price={prices.buy}
              total={total}
              amount={wallet.balance}
              exchangeable={wallet.exchangeable}
              currency={wallet.token}
              onSell={() => this.handleSell(wallet, prices)}
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
  wallets: auth.user.wallets,
  prices
})

export default connect(
  mapStateToProps,
  { openModal }
)(Currencies)
