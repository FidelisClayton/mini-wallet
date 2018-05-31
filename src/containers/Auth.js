import React, { Component } from 'react'
import { connect } from 'react-redux'
import { css } from 'emotion'

import Login from '../components/Login'
import Register from '../components/Register'

import * as colors from '../helpers/colors'
import { createUser } from '../store/actions/user'

const styles = css({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.lightGreen,
  textAlign: 'center'
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
          onSubmit={this.props.createUser}
        />
      </div>
    )
  }
}

export default connect(
  () => ({}),
  {
    createUser
  }
)(Auth)
