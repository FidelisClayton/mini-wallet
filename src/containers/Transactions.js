import React from 'react'
import { connect } from 'react-redux'

import Transaction from '../components/Transaction'

const Transactions = ({
  transactions
}) => {
  return (
    <div className="transactions">
      { transactions.reverse().map(transaction => (
        <Transaction
          key={transaction.id}
          fromCoin={transaction.fromCoin.token}
          fromAmount={transaction.fromAmount}
          toCoin={transaction.toCoin.token}
          toAmount={Number(transaction.toAmount)}
          toPrice={transaction.toPrice}
          date={transaction.date}
        />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  transactions: state.auth.user.transactions
})

export default connect(mapStateToProps)(Transactions)
