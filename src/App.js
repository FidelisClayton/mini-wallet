import React, { Component } from 'react'
import { connect } from 'react-redux'

import Routes from './Routes'
import Modal from './containers/Modal'

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
      <React.Fragment>
        <Routes />
        <Modal />
      </React.Fragment>
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
