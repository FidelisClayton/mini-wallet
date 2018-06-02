import React, { Component } from 'react'
import { connect } from 'react-redux'
import { css } from 'emotion'

import {
  Switch,
  Route
} from 'react-router-dom'

import Navbar from '../components/Navbar'
import Button from '../components/Button'

import Currencies from './Currencies'
import Transactions from './Transactions'

import * as colors from '../helpers/colors'
import * as breakpoints from '../helpers/breakpoints'
import { formatBRL } from '../helpers/formaters'

import { logout } from '../store/actions/auth'

const styles = css({
  minHeight: '100vh',
  backgroundColor: colors.lightGrey,

  '.home': {
    '&__logo-wrapper': {
      ...breakpoints.medium({
        maxWidth: '600px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
      })
    },

    '&__logo': {
      margin: 0,
      fontSize: '1.3rem',
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 2,
    },

    '&__hero': {
      backgroundColor: colors.white,
      color: colors.darkBlue,
      boxShadow: colors.heroShadow,
      paddingTop: '20px'
    },

    '&__total-wrapper': {
      height: '180px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.8rem'
    },

    '&__routes': {
      paddingLeft: '10px',
      paddingRight: '10px',
    },

    '&__logout': {
      position: 'absolute',
      width: '50px',
      background: 'transparent',
      right: '8px',
      top: '12px',
      textTransform: 'uppercase',
      fontSize: '0.8rem',
      color: colors.darkBlue,

      ...breakpoints.medium({
        position: 'static'
      })
    },
  },

  ...breakpoints.medium({
    '.home': {
      '&__routes': {
        maxWidth: '700px',
        margin: '0 auto'
      }
    }
  })
})

export class Home extends Component {
  get totalBalance () {
    return this.props.wallets.reduce((total, wallet) => {
      const token = wallet.token.toLowerCase()
      const coinPrice = this.props.prices.tokens[token].sell

      return Number((total + (wallet.balance * coinPrice)).toFixed(2))
    }, 0)
  }

  render () {
    return (
      <div className={`home ${styles}`}>
        <div className="home__hero">
          <div className="home__logo-wrapper">
            <h1 className="home__logo"><small>Mini</small>Wallet</h1>

            <Button
              className="home__logout"
              onClick={this.props.logout}
            >
              Sair
            </Button>
          </div>

          <div className="home__total-wrapper">
            <h3 className="home__total">
              <small>R$</small> { formatBRL(this.totalBalance) }
            </h3>
          </div>

          <Navbar />
        </div>

        <div className="home__routes">
          <Switch>
            <Route
              exact
              path="/home"
              component={Currencies}
            />

            <Route
              exact
              path="/home/transactions"
              component={Transactions}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  wallets: state.auth.user.wallets,
  prices: state.prices
})

export default connect(mapStateToProps, { logout })(Home)
