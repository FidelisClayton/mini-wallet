import * as actions from '../actions/prices'

const initialState = {
  tokens: {},
  loading: false,
  loaded: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PRICES:
      return {
        ...state,
        tokens: action.payload,
        error: null
      }

  case actions.FETCH_PRICES_SUCCESS:
    return {
      ...state,
      tokens: action.payload,
      error: null
    }

    default:
      return state
  }
}

export default reducer
