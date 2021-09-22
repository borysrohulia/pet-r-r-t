import React from 'react'
import {NavLink} from "react-router-dom";
import cl from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={cl.header}>
      <ul>
        <li>
          <NavLink activeClassName="selectedLink" to="/" exact={true}>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selectedLink" to="/artists" exact={true}>Artists</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selectedLink" to="/songs" exact={true}>Songs</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header