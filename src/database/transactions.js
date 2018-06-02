import db from './index'
import uuidv4 from 'uuid/v4'

const walletByToken = token => wallet => wallet.token === token

const updateWalletBalances = (transaction, user) => {
  const walletsUpdated =
    user.wallets
      .map(wallet => {
        if (wallet.token === transaction.fromCoin.token) {
          // update the coin that was sold
          return {
            ...wallet,
            balance: wallet.balance - transaction.fromAmount
          }
        } else if (wallet.token === transaction.toCoin.token) {
          // update the coin that was bought
          return {
            ...wallet,
            balance: wallet.balance + transaction.toAmount
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
}
