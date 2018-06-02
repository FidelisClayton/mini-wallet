import React from 'react'
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

export default NavbarItem
