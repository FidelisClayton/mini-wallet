import * as userDb from '../../database/user'

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL'

const createUserRequest = (payload) => ({
  type: CREATE_USER_REQUEST,
  payload
})

const createUserSuccess = (data) => ({
  type: CREATE_USER_SUCCESS,
  payload: data
})

const createUserFail = (error) => ({
  type: CREATE_USER_FAIL,
  payload: error
})

export const createUser = (data) => (dispatch) => {
  dispatch(createUserRequest(data))

  return userDb.createUser(data)
    .then(user => userDb.findUser(user.id))
    .then(user => dispatch(createUserSuccess(user)))
    .catch(error => dispatch(createUserFail(error)))
}
