import React from 'react'
import { css } from 'emotion'

import { withRouter } from 'react-router-dom'

import * as colors from '../helpers/colors'
import * as breakpoints from '../helpers/breakpoints'

import NavbarItem from './NavbarItem'

const styles = css({
  '.nav': {
    '&__menu': {
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'space-around',
      padding: 0
    },

    '&__item': {
      textAlign: 'center',
      marginLeft: '15px',
      marginRight: '15px',
      textTransform: 'uppercase',
    },

    '&__link': {
      textDecoration: 'none',
      color: colors.inactiveLightGreen,
      fontWeight: 'bold',
      paddingBottom: '8px',
      display: 'block',
      position: 'relative',
      transition: '300ms color',
      letterSpacing: 2,

      '&::after': {
        content: '\'\'',
        position: 'absolute',
        height: '2px',
        width: 0,
        backgroundColor: colors.darkGreen,
        left: 0,
        bottom: 0,
        transition: '300ms ease-in-out width'
      },

      '&--active': {
        color: colors.darkGreen,
        opacity: 1,

        '&::after': {
          width: '100%'
        }
      }
    }
  },

  ...breakpoints.medium({
    '&.nav': {
      maxWidth: '600px',
      margin: '0 auto'
    }
  })
})

const Navbar = props => {
  return (
    <nav className={`nav ${styles}`}>
      <ul className="nav__menu">
        <NavbarItem
          to="/home"
          text="Moedas"
          active={props.location.pathname === "/home"}
        />

        <NavbarItem
          to="/home/transactions"
          text="Transações"
          active={props.location.pathname === "/home/transactions"}
        />
      </ul>
    </nav>
  )
}

export default withRouter(Navbar)
