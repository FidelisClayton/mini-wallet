import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavbarItem = ({
  to,
  text,
  active
}) => {
  const classNames = [
    'nav__link',
    active && 'nav__link--active'
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <li className="nav__item">
      <Link
        to={to}
        className={classNames}
      >
        { text }
      </Link>
    </li>
  )
}

NavbarItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default NavbarItem
