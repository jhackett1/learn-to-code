import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import slugify from 'slugify'

const LessonTemplate = ({ data }) => {
  return(
    <div>
      <Helmet
        title={`${data.markdownRemark.frontmatter.order}. ${data.markdownRemark.frontmatter.title}`}
      />
      <div className="breadcrumbs">
        <ol role="breadcrumbs">
          <li>
            <Link to="/">DDaT Codelabs</Link>
          </li>
          <li>{data.markdownRemark.frontmatter.module}</li>
          <li>{data.markdownRemark.frontmatter.title}</li>
        </ol>
      </div>

      <div className="grid-row">
        <div className="column-two-thirds">
          <h1 className="heading-xlarge">{data.markdownRemark.frontmatter.order}. {data.markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>

        <div className="column-one-third">
        </div>
      </div>
    </div>
  )
}

export default LessonTemplate

export const lessonQuery = graphql`
  query currentLessonQuery($title: String!, $module: String!){
    markdownRemark(frontmatter: {
      title: { eq: $title },
      module: { eq: $module }
     }) {
      frontmatter {
        title
        module
        order
        type
        plenary_question
        plenary_answers {
          answer
          correct
        }
      }
      html
    }
  }
`
