import React from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'

export  default ({ data }) => (
  <div>
    <nav className="page-navigation" aria-label="Pagination">
        <div className="previous">
          <a href="/djsj" rel="prev">
            <span className="title">
            <svg height="13" width="17" viewBox="0 0 17 13">
              <path fill="currentColor" d="m10.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
            </svg>
            Previous</span>
            <span className="label">Lesson name</span>
          </a>
        </div>
        <div className="next">
          <a href="/djsk" rel="next">
            <span className="title">Next
            <svg height="13" width="17" viewBox="0 0 17 13">
              <path fill="currentColor" d="m10.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
            </svg></span>
            <span className="label">Lesson name</span>
          </a>
        </div>
      </nav>
  </div>
)
