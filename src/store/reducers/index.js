import { combineReducers } from 'redux'

import auth from './auth'
import prices from './prices'

export default combineReducers({
  auth,
  prices
})
