import React from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'

export default ({data}) => (
  <Link className="button button-start" to={`/lesson/${
    slugify(data.lessons.edges.filter((lesson) => {
      if (lesson.node.frontmatter.module === data.modules.edges[0].node.frontmatter.title) return lesson
    })[0].node.frontmatter.title, {lower: true})
  }`} role="button">Start learning</Link>
)
