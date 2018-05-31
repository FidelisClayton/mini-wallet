import * as userDb from '../../database/user'

export const CHECK_CREDENTIALS_REQUEST = 'CHECK_CREDENTIALS_REQUEST'
export const CHECK_CREDENTIALS_SUCCESS = 'CHECK_CREDENTIALS_SUCCESS'
export const CHECK_CREDENTIALS_FAIL = 'CHECK_CREDENTIALS_FAIL'

export const SET_USER = 'SET_USER@AUTH'

const checkCredentialsRequest = (payload) => ({
  type: CHECK_CREDENTIALS_REQUEST,
  payload
})

const checkCredentialsSuccess = (payload) => ({
  type: CHECK_CREDENTIALS_SUCCESS,
  payload
})

const checkCredentialsFail = (payload) => ({
  type: CHECK_CREDENTIALS_FAIL,
  payload
})

export const checkCredentials = (credentials) => (dispatch) => {
  dispatch(checkCredentialsRequest(credentials))

  return userDb.findUser(credentials.email)
    .then(user => {
      if (user.password === credentials.password) {
        localStorage.setItem('user', JSON.stringify(user))
      }

      dispatch(checkCredentialsSuccess({
        credentials,
        user
      }))
    })
    .catch(error => dispatch(checkCredentialsFail(error)))
}

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})
