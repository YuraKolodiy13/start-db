import React from 'react';
import './ErrorIndicator.scss'
import icon from './boom.png'

const ErrorIndicator = () => {
  return (
      <div className='ErrorIndicator'>
        <img src={icon} alt=""/>
        <span className='boom'>Boom!!</span>
        <span>something bad</span>
        <span>but we already fixed it</span>
      </div>
  )
}

export default ErrorIndicator;