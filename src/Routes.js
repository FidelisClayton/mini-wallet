import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />

        <Route
          path="/login"
          component={Login}
        />

        <Route
          path="/register"
          component={Register}
        />
      </Switch>
    </Router>
  )
}

export default Routes
