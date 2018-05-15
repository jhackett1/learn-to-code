import React from 'react'
import Link from 'gatsby-link'
import logo from './logo.png'
import slugify from 'slugify'
import StartButton from '../components/start-button'

export default ({ data }) => (
  <div>
    <section className="hero">
      <div className="page-container">
        <div className="grid-row">
          <div className="column-two-thirds">
            <h1 className="heading-xlarge">Learn to code in six months</h1>
            <p className="lede">DDaT Codelabs are an easy way to get to know the technology behind government services.</p>
            <StartButton data={data}/>
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
        <h2 className="heading-large">Step by step</h2>
        <p>New modules are released monthly. Each one should take a day or two to complete.</p>

        <ol className="course-overview-list">
          {data.modules.edges.map(module=>(
            <li className="module" key={module.node.frontmatter.title}>
              <span className="number">{module.node.frontmatter.order}</span>
              <h3 className="heading-medium">{module.node.frontmatter.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: module.node.html }}></p>
              <details>
                <summary><span className="summary">Show lessons</span></summary>
                <div>
                  <ol className="lesson-list">
                    {data.lessons.edges.filter((lesson) => {
                      if (lesson.node.frontmatter.module === module.node.frontmatter.title) return lesson
                    }).map(lesson=>
                      <li key={lesson.node.frontmatter.title} ><Link to={`/lesson/${slugify(lesson.node.frontmatter.title, {lower: true})}`}>{lesson.node.frontmatter.title}</Link></li>
                    )}
                  </ol>
                </div>
              </details>
            </li>
          ))}
        </ol>

      </div>
    </div>
  </div>
)

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
