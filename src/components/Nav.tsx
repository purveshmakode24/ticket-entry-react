import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header className="d-flex justify-content-center py-3 border-bottom">
      <ul className="nav nav-pills">
        <li className="nav-item"><NavLink to='/support-agents/' className={({ isActive }) =>
          isActive ? 'active nav-link' : 'nav-link'}>Agents</NavLink></li>
        <li className="nav-item"><NavLink to='/support-tickets/' className={({ isActive }) =>
          isActive ? 'active nav-link' : 'nav-link'}>Tickets</NavLink></li>
      </ul>
    </header>
  )
}

export default Nav