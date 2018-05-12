import React from 'react'

const LessonTemplate = ({ data }) => {
  return(
    <div>
      <h1 className="heading-xlarge">{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
