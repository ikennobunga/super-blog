import React from 'react'
import './navBar.css'
import {Link} from 'gatsby'
import * as Data from '../../../data/sb.js'


const NavBar = () => {
  return (
    <nav>
      <div className="logo__container">
        <p>{Data.nav.logo}</p>
      </div>
      {
        Data.nav.navList.map(nav => {
          return (
            <ul key={nav.id}>
              <li><Link to={nav.path}>{nav.name}</Link></li>
            </ul>
          )
        })
      }
    </nav>
  )
}

export {NavBar}