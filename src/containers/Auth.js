import React, { Component } from 'react'
import { css } from 'emotion'

import Login from '../components/Login'
import Register from '../components/Register'

import * as colors from '../helpers/colors'

const styles = css({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.lightGreen,
  textAlign: 'center'
})

export default class Auth extends Component {
  state = {
    register: false,
    login: true
  }

  register = () => {
    this.setState({
      register: true,
      login: false
    })
  }

  login = () => {
    this.setState({
      register: false,
      login: true
    })
  }

  render () {
    return (
      <div className={`auth ${styles}`}>
        <Login
          active={this.state.login}
          onClick={this.login}
        />

        <Register
          active={this.state.register}
          onClick={this.register}
        />
      </div>
    )
  }
}
