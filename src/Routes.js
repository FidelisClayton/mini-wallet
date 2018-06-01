import React from 'react'
import { connect } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from './containers/Home'
import Auth from './containers/Auth'
import PrivateRoute from './components/PrivateRoute'

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <PrivateRoute
          path="/home"
          component={Home}
          authenticated={props.auth.allowed}
        />

        <Route
          exact
          path="/"
          component={() => {
            return props.auth.allowed
              ? <Redirect to="/home" />
              : <Auth />
          }}
        />
      </Switch>
    </Router>
  )
}

export default connect(
  state => ({ auth: state.auth })
)(Routes)
