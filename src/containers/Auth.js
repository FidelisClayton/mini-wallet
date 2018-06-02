import React, { Component } from 'react'
import { connect } from 'react-redux'
import { css } from 'emotion'

import Login from '../components/Login'
import Register from '../components/Register'

import * as colors from '../helpers/colors'

import { createUser } from '../store/actions/user'
import { checkCredentials } from '../store/actions/auth'

const styles = css({
  minHeight: '100vh',
  backgroundColor: colors.lightGreen,

  '.auth__wrapper': {
    maxWidth: '500px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0 auto',
    position: 'relative'
  }
})

export class Auth extends Component {
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

  handleLogin = (credentials) => {
    this.props.checkCredentials(credentials)
  }

  render () {
    return (
      <div className={`auth ${styles}`}>
        <div className={'auth__wrapper'}>
          <Login
            active={this.state.login}
            onClick={this.login}
            onSubmit={this.handleLogin}
            error={this.props.auth.error}
          />

          <Register
            active={this.state.register}
            onClick={this.register}
            onSubmit={this.props.createUser}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    auth: state.auth
  }),
  {
    createUser,
    checkCredentials
  }
)(Auth)
