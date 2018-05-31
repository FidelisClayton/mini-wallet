import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './containers/Home'
import Auth from './containers/Auth'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/home"
          component={Home}
        />

        <Route
          exact
          path="/"
          component={Auth}
        />
      </Switch>
    </Router>
  )
}

export default Routes
