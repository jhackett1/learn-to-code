import React from 'react'
import moment from 'moment'

const LastUpdated = ({lastModified}) => (
  <small className="last-updated">
    Last updated {moment(lastModified).format("Do MMMM YYYY")}. You can <a href="http://github.com/jhackett1/learn-to-code">improve this lesson</a> on Github.
  </small>
)

export default LastUpdated
