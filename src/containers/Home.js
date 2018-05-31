import React, { Component } from 'react'
import { css } from 'emotion'

import Currency from '../components/Currency'
import Navbar from '../components/Navbar'

const styles = css({
  minHeight: '100vh',
  backgroundColor: '#edeff3',

  '.home': {
    '&__logo': {
      margin: 0,
      fontSize: '1.1rem',
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 2,
    },

    '&__hero': {
      backgroundColor: '#FFF',
      color: '#344760',
      boxShadow: '0 -2px 20px 0 #576475',
      paddingTop: '20px'
    },

    '&__total-wrapper': {
      height: '180px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.8rem'
    },

    '&__currencies': {
      paddingLeft: '10px',
      paddingRight: '10px',
    }
  }
})

export default class Home extends Component {
  render () {
    return (
      <div className={`home ${styles}`}>
        <div className="home__hero">
          <div className="home__logo-wrapper">
            <h1 className="home__logo"><small>Mini</small>Wallet</h1>
          </div>

          <div className="home__total-wrapper">
            <h3 className="home__total">R$ 10.000,00</h3>
          </div>

          <Navbar />
        </div>

        <div className="home__currencies">
          <Currency />
          <Currency />
          <Currency />
        </div>
      </div>
    )
  }
}
