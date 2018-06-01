import * as actions from '../actions/auth'
import * as userActions from '../actions/user'

const initialState = {
  user: null,
  error: null,
  allowed: false,
  loading: false,
  loaded: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHECK_CREDENTIALS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case actions.CHECK_CREDENTIALS_SUCCESS:
      if (action.payload.user.password === action.payload.credentials.password) {
        return {
          ...state,
          user: action.payload.user,
          allowed: true,
          error: null,
          loaded: true,
          loading: false,
        }
      } else {
        return {
          ...state,
          user: null,
          allowed: false,
          error: 'Email e senha não combinam',
          loaded: true,
          loading: false
        }
      }

    case actions.CHECK_CREDENTIALS_FAIL:
      return {
        ...state,
        user: null,
        allowed: false,
        error: 'Email e senha não combinam',
        loaded: true,
        loading: false
      }

    case actions.SET_USER:
      return {
        ...state,
        user: action.payload,
        allowed: action.payload !== null
      }

    case actions.LOGOUT:
      return initialState

    case userActions.CREATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        allowed: true
      }

    default:
      return state
  }
}

export default reducer
