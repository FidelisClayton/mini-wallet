import { combineReducers } from 'redux'

import auth from './auth'
import prices from './prices'
import modal from './modal'

export default combineReducers({
  auth,
  prices,
  modal
})
