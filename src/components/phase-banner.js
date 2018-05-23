import React from 'react'
import Link from 'gatsby-link'

export default ({showHeaderBar}) => (
  <div>
    {(showHeaderBar) ? <div id="global-header-bar"></div> : ""}  
    <div className="phase-banner">
      <p><strong className="phase-tag">ALPHA</strong><span>This is a new service – your <Link to={"/feedback"}>feedback</Link> will help us to improve it.</span></p>
    </div>
  </div>
)
