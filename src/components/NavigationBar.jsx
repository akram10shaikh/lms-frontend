import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationBar.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

export default function NavigationBar(){
  return (
    <nav className="nav-root">
      <div className="nav-left">
        <Link to="/" className="logo-container">
          <span className="logo-icon"><img src={logo} alt="logo" /></span>
          <span className="logo-text">LearnPro</span>
        </Link>
      </div>

      <div className="nav-center">
        <div className="search-wrap">
          <input className="nav-search" placeholder="What do you like to learn ?" />
          <button className="search-btn" aria-label="Filters">
            <FontAwesomeIcon icon={faSliders} />
          </button>
        </div>
      </div>

      <div className="nav-right">
        <Link to="/login" className="btn-primary">Log in</Link>
        <Link to="/signup" className="btn-outline">Sign in</Link>
      </div>
    </nav>
  )
}
