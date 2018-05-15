import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div className="grid-row">
    <div className="column-two-thirds">
    <h1 className="heading-xlarge">Page not found</h1>
    <p>If you entered a web address please check it was correct.</p>
    <p>If you were expecting something to be here, please <Link to={`/feedback`}>let us know</Link>.</p>
    </div>
  </div>
)
