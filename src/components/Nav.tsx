import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header className="d-flex flex-column align-items-center py-3 border-bottom">
      <h4 className="mb-3">Support Ticket Entry System</h4>
      <div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to='/support-agents/' className={({ isActive }) =>
              isActive ? 'active nav-link' : 'nav-link'}>Agents</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/support-tickets/' className={({ isActive }) =>
              isActive ? 'active nav-link' : 'nav-link'}>Tickets</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Nav