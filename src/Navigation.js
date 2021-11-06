import React from 'react'
import { Link } from '@reach/router'
import HuelLogo from './HuelLogo'

const Navigation = () => {
  return (
    <div className="column is-one-fifth acc-menu is-hidden-touch">
      <HuelLogo />
      <ul className="menu-list acc-menu-list">
        <li className="acc-menu-overview">
          <Link to="/">
            <div className="acc-menu-item">
              <div className="acc-menu-icon is-hidden-tablet-only">
                <img
                  alt="Profile"
                  className="image"
                  src="https://www.gravatar.com/avatar/013688f95c442156af947819c17a1a99.jpg?d=identicon"
                />
              </div>
              <div className="acc-menu-customer">
                <p>Overview</p>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/task">
            <div className="acc-menu-item">
              <span>Technical Task</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
