import React from 'react'
import PropTypes from 'prop-types'

import {
  Route,
  Redirect
} from 'react-router-dom'

// This component has almost the same API as Route from react-route-dom
// It will render a <Router /> but verifies if the user is authorized
// to procceed to the private route, if not, the user will be redirected
// to the login page
const PrivateRoute = ({
  component: Component,
  authenticated,
  ...props
}) => (
  <Route
    {...props}
    render={(props) => (
      authenticated === true
      ? <Component {...props} />
      : <Redirect to="/" />
    )}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired
}

export default PrivateRoute
