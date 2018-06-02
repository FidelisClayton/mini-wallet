import db from './index'
import uuidv4 from 'uuid/v4'

const updateWalletBalances = (transaction, user) => {
  const walletsUpdated =
    user.wallets
      .map(wallet => {
        if (wallet.token === transaction.fromCoin.token) {
          // update the coin that was sold
          // fromAmount: amount of money is leaving from the wallet
          const newBalance = Number(wallet.balance) - Number(transaction.fromAmount)

          return {
            ...wallet,
            balance: Number(newBalance.toFixed(wallet.decimalPlaces))
          }
        } else if (wallet.token === transaction.toCoin.token) {
          // update the coin that was bought
          // toAmount: the amount of money that is going to the wallet
          const newBalance = Number(wallet.balance) + Number(transaction.toAmount)

          return {
            ...wallet,
            balance: Number(newBalance.toFixed(wallet.decimalPlaces))
          }
        }

        return wallet
      })

  return walletsUpdated
}

export const createTransaction = (transaction, userId) => {
  return db.get(userId)
    .then(user => {
      const newTransactions = [
        ...user.transactions,
        {
          id: uuidv4(),
          ...transaction
        },
      ]

      return db.put({
        ...user,
        transactions: newTransactions,
        wallets: updateWalletBalances(transaction, user)
      })
    })
    .then(() => db.get(userId))
}
