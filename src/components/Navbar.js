import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'emotion'

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
      color: '#4CAF50',
      fontWeight: 'bold',
      paddingBottom: '8px',
      display: 'block',
      position: 'relative',
      transition: '300ms color',
      letterSpacing: 2,
      opacity: 0.5,

      '&::after': {
        content: '\'\'',
        position: 'absolute',
        height: '2px',
        width: 0,
        backgroundColor: '#4CAF50',
        left: 0,
        bottom: 0,
        transition: '300ms ease-in-out width'
      },

      '&--active': {
        color: '#4CAF50',
        opacity: 1,

        '&::after': {
          width: '100%'
        }
      }
    }
  }
})

const Navbar = props => {
  return (
    <nav className={`nav ${styles}`}>
      <ul className="nav__menu">
        <li className="nav__item">
          <Link
            to="/home"
            className="nav__link nav__link--active"
          >
            Moedas
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/home/transactions"
            className="nav__link"
          >
            Transações
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
