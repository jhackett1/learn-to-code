import React from 'react'
import Link from 'gatsby-link'

const CourseOverview = ({ data }) => (
  <div className="grid-row">
    <div className="column-two-thirds">
    <h1>Course overview</h1>
    {data.modules.edges.map(lesson=>(
      <li key={lesson.node.frontmatter.title}>
        <h3>{lesson.node.frontmatter.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: lesson.node.html }}></p>
      </li>
    ))}
    </div>
  </div>
)

export default CourseOverview

export const courseOverviewQuery = graphql`
  query courseOverviewQuery{
    lessons: allMarkdownRemark (
      sort: { order: ASC, fields: [frontmatter___order] },
      filter: {fileAbsolutePath: {regex: "/lessons/.*$/"}}
    ) {
      edges {
        node {
          frontmatter {
            title
            module
            order
            type
          }
        }
      }
    }
    modules: allMarkdownRemark (
      sort: { order: ASC, fields: [frontmatter___order] },
      filter: {fileAbsolutePath: {regex: "/modules/.*$/"}}
    ) {
      edges {
        node {
          frontmatter {
            title
            order
            available_from
            available_to
          }
          html
        }
      }
    }
  }
`
