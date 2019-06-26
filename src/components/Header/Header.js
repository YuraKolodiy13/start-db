import React from 'react';
import './Header.scss'

const Header = props => {
  return (
      <div className='Header'>
        <h1>Star DB</h1>
        <ul>
          <li><span>People</span></li>
          <li><span>Planets</span></li>
          <li><span>Starships</span></li>
        </ul>
      </div>
  )
}

export default Header;