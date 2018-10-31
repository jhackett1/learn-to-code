import React from 'react'
import Link from 'gatsby-link'

export default ({showHeaderBar}) => (
  <div>
    {(showHeaderBar) ? <div id="global-header-bar"></div> : ""}
    <div className="phase-banner">
      <p><strong className="phase-tag">BETA</strong><span>This is a new service – your <a href="https://goo.gl/forms/7HxpdiC8vOnvi1tc2">feedback</a> will help us to improve it.</span></p>
    </div>
  </div>
)
