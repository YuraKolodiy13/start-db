import React from 'react'
import './Loader.scss'

const Loader = props => {
  return(
      <div className="lds-css ng-scope">
        <div className="lds-double-ring">
          <div></div>
          <div></div>
        </div>
      </div>
  )
}

export default Loader;