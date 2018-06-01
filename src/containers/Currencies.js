import React from 'react'
import { connect } from 'react-redux'

import Currency from '../components/Currency'

const Currencies = ({
  wallets,
  prices
}) => {
  return (
    <div className="home__currencies">
      { wallets.map(wallet => {
        const price = prices.tokens[wallet.token.toLowerCase()].buy
        const total = wallet.balance * price

        return (
          <Currency
            name={wallet.name}
            price={price}
            total={total}
            amount={wallet.balance}
            exchangeable={wallet.exchangeable}
            currency={wallet.token}
          />
        )
      })
      }
    </div>
  )
}

const mapStateToProps = ({
  auth,
  prices
}) => ({
  wallets: auth.user.wallets,
  prices
})

export default connect(mapStateToProps)(Currencies)
