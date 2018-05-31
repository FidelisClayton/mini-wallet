import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import thunk from 'redux-thunk'

import reducers from './reducers'

const middlewares = [ thunk ]
// Use Redux devtools extension compose if available, as fallback will use the redux `compose`
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(...middlewares)
))

export default store
