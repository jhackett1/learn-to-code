import React from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'

export  default ({ allLessons, thisLesson }) => {

  let currentOrder = thisLesson.frontmatter.order

  let nextLesson = allLessons.edges.filter(lessonToTest => {
    if (lessonToTest.node.frontmatter.module === thisLesson.frontmatter.module && lessonToTest.node.frontmatter.order === currentOrder + 1) {
      return lessonToTest
    }
  })

  let previousLesson = allLessons.edges.filter(lessonToTest => {
    if (lessonToTest.node.frontmatter.module === thisLesson.frontmatter.module && lessonToTest.node.frontmatter.order === currentOrder - 1) {
      return lessonToTest
    }
  })

  return(
    <div>
      <nav className="page-navigation" aria-label="Pagination">

        <div className="previous">
          {(previousLesson.length > 0) ?
            <Link to={`/lesson/${slugify(previousLesson[0].node.frontmatter.title, {lower: true})}`} rel="prev">
              <span className="title">
              <svg height="13" width="17" viewBox="0 0 17 13">
                <path fill="currentColor" d="m10.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
              </svg>
              Previous</span>
              <span className="label">{previousLesson[0].node.frontmatter.title}</span>
            </Link>
          : ""}
        </div>
        <div className="next">
          {(nextLesson.length > 0) ?
            <Link to={`/lesson/${slugify(nextLesson[0].node.frontmatter.title, {lower: true})}`} rel="next">
              <span className="title">Next
              <svg height="13" width="17" viewBox="0 0 17 13">
                <path fill="currentColor" d="m10.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
              </svg></span>
              <span className="label">{nextLesson[0].node.frontmatter.title}</span>
            </Link>
          : ""}
        </div>
      </nav>
    </div>
  )
}
