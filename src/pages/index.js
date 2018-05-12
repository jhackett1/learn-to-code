import React from 'react'
import Link from 'gatsby-link'
import logo from './logo.png'

const CourseOverview = ({ data }) => (
  <div>
    <section className="hero">
      <div className="page-container">
        <div className="grid-row">
          <div className="column-two-thirds">
            <h1 className="heading-xlarge">Learn to code in six months</h1>
            <p className="lede">DDaT Codelabs are an easy way to get to know the technology behind government services.</p>
            <Link className="button button-start" href="#" role="button">Start learning</Link>
            <p><Link to="/page/why-this-exists">Read about why Codelabs exists</Link></p>
          </div>
          <div className="column-one-third">
            <img src={logo} alt="Learn to code"/>
          </div>
        </div>
      </div>
    </section>

    <div className="grid-row">
      <div className="column-two-thirds">
      <h2 className="heading-large">Course overview</h2>
      <p>New modules are released monthly.</p>

      <ol className="course-overview-list">
        {data.modules.edges.map(lesson=>(
          <li key={lesson.node.frontmatter.title}>
            <span className="number">{lesson.node.frontmatter.order}</span>
            <h3 className="heading-medium">{lesson.node.frontmatter.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: lesson.node.html }}></p>
          </li>
        ))}
      </ol>

      </div>
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
