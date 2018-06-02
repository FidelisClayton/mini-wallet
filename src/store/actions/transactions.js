import * as transactionsDb from '../../database/transactions'

export const CREATE_TRANSACTION_REQUEST = 'CREATE_TRANSACTION_REQUEST'
export const CREATE_TRANSACTION_SUCCESS = 'CREATE_TRANSACTION_SUCCESS'
export const CREATE_TRANSACTION_FAIL = 'CREATE_TRANSACTION_FAIL'

const createTransactionRequest = payload => ({
  type: CREATE_TRANSACTION_REQUEST,
  payload
})

const createTransactionSuccess = payload => ({
  type: CREATE_TRANSACTION_SUCCESS,
  payload
})

const createTransactionFail = payload => ({
  type: CREATE_TRANSACTION_FAIL,
  payload
})

export const createTransaction = (transaction, userId) => dispatch => {
  dispatch(createTransactionRequest(transaction))

  return transactionsDb.createTransaction(transaction, userId)
    .then(user => {
      localStorage.setItem('user', JSON.stringify(user))

      return dispatch(createTransactionSuccess(user))
    })
    .catch(error => dispatch(createTransactionFail(error)))
}
