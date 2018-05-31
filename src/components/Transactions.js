import React from 'react'

import Transaction from './Transaction'

const Transactions = (props) => {
  return (
    <div className="transactions">
      <Transaction
        fromCoin="BRL"
        fromAmount={500}
        toCoin="BRT"
        toAmount={134.40}
        toPrice={3.72}
        date={new Date()}
      />

      <Transaction
        fromCoin="BRL"
        fromAmount={500}
        toCoin="BTC"
        toAmount={0.00700000}
        toPrice={3.72}
        date={new Date()}
      />
    </div>
  )
}

export default Transactions
