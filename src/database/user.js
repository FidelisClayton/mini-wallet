import db from './index'

const initialBalance = 100000

export const createUser = (user) => {
  return db.put({
    _id: user.email,
    wallets: [
      {
        id: 'brl',
        token: 'BRL',
        name: 'Real',
        balance: initialBalance,
        decimalPlaces: 2
      },
      {
        id: 'btc',
        token: 'BTC',
        name: 'Bitcoin',
        balance: 0,
        decimalPlaces: 8
      },
      {
        id: 'brt',
        token: 'BRT',
        name: 'Brita',
        balance: 0,
        decimalPlaces: 2
      }
    ],
    transactions: [],
    ...user
  })
}

export const findUser = (email) => {
  return db.get(email)
}

export const verifyIfUserExists = (email) => {
  return db.get(email)
    .then(() => true)
    .catch(() => false)
}
