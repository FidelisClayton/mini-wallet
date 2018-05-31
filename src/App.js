import React, { Component } from 'react'
import { connect } from 'react-redux'

import Routes from './Routes'
import { setUser } from './store/actions/auth'

import './App.css'
import './api'

class App extends Component {
  componentDidMount () {
    this.props.setUser(localStorage.getItem('user'))
  }

  render() {
    return (
      <Routes />
    )
  }
}

export default connect(
  state => ({}),
  { setUser }
)(App)
