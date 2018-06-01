import React, { Component } from 'react'
import { connect } from 'react-redux'

import Routes from './Routes'
import { setUser } from './store/actions/auth'

import {
  fetchPrices,
  setPrices
} from './store/actions/prices'

import './App.css'
import './api'

class App extends Component {
  componentDidMount () {
    const user = JSON.parse(localStorage.getItem('user'))
    const prices = JSON.parse(localStorage.getItem('prices'))

    this.props.setUser(user)
    this.props.setPrices(prices)
    this.props.fetchPrices(new Date())
  }

  render() {
    return (
      <Routes />
    )
  }
}

export default connect(
  state => ({}),
  {
    setUser,
    fetchPrices,
    setPrices
  }
)(App)
