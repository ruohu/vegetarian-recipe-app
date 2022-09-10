import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="Vegetarian Recipes" />
        </Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/cuisine/italian">Italian</Link>
        <Link className="nav-link" to="/cuisine/french">French</Link>
        <Link className="nav-link" to="/cuisine/spanish">Spanish</Link>
      </div>
    </nav>
  )
}

export default Navbar;