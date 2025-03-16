import React from 'react'
import logo from '../assets/logo-transparent-png.png'
const NavBar = ({handleInput,inputSearch,getData}) => {
  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="" />
            <h1 className="navbar-title">MinuteNews</h1>
        </div>
        
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search News"
          onChange={handleInput}
          value={inputSearch}
          className="search-input"
        />
        <button onClick={getData} className="search-button">Search</button>
      </div>
    </nav>
  )
}

export default NavBar
