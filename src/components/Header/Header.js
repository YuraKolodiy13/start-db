import React, {Component} from 'react';
import './Header.scss'
import {NavLink} from  'react-router-dom'

// const links = [
//   {to: '/people', label: 'People'},
//   {to: '/planets', label: 'Planets'},
//   {to: '/starships', label: 'Starships'},
//   {to: '/login', label: 'Login'},
//   {to: '/secret-page', label: 'SecretPage'}
// ];

export default class Header extends Component{

  // renderLinks(){
  //   return  links.map((item, index) => {
  //     return (
  //       <li key={index}>
  //         <NavLink to={item.to} exact={item.exact} activeClassName='active'>{item.label}</NavLink>
  //       </li>
  //     )
  //   });
  // }

  render(){
    return (
      <div className='Header'>
        <h1>
          <NavLink to='/' exact>Star DB</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to='/people' activeClassName='active'>People</NavLink>
          </li>
          <li>
            <NavLink to='/planets' activeClassName='active'>Planets</NavLink>
          </li>
          <li>
            <NavLink to='/starships' activeClassName='active'>Starships</NavLink>
          </li>
          {!this.props.isLoggedIn
            ? <li>
                <NavLink to='/login' activeClassName='active'>Login</NavLink>
              </li>
            : null
          }
          {this.props.isLoggedIn
            ? <li>
                <NavLink to='/secret-page' activeClassName='active'>SecretPage</NavLink>
              </li>
            : null
          }
        </ul>
      </div>
    )
  }
}