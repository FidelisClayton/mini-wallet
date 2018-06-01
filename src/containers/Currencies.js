import React from 'react'
import { connect } from 'react-redux'

import Currency from '../components/Currency'

const Currencies = ({
  wallets
}) => {
  return (
    <div className="home__currencies">
      { wallets.map(wallet => (
        <Currency
          name={wallet.name}
          price={3.73}
          total={wallet.balance * 3.73}
          amount={wallet.balance}
          exchangeable={wallet.exchangeable}
          currency={wallet.token}
        />
      ))
      }
    </div>
  )
}

const mapStateToProps = ({ auth }) => ({
  wallets: auth.user.wallets
})

export default connect(mapStateToProps)(Currencies)
