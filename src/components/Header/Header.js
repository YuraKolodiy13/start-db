import React from 'react';
import './Header.scss'
import Navigation from "../Navigation/Navigation";

const Header = props => {
  return (
      <div className='Header'>
        <h1>Star DB</h1>
        <Navigation/>
      </div>
  )
}

export default Header;