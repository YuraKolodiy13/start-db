import React, {Component} from 'react'
import {NavLink} from  'react-router-dom'

const links = [
  {to: '/', label: 'Home', exact: true},
  {to: '/people', label: 'People', exact: true},
  {to: '/planets', label: 'Planets', exact: false},
  {to: '/starships', label: 'Starships', exact: false}
];

export default class Navigation extends Component{

  renderLinks(){
    return  links.map((item, index) => {
      return (
        <li key={index}>
          <NavLink to={item.to} exact={item.exact} activeClassName='active' onClick={this.props.onClose}>{item.label}</NavLink>
        </li>
      )
    });
  }

  render(){
    return(
      <ul>
        {this.renderLinks()}
      </ul>
    )
  }
}