import React from 'react'

const PageTemplate = ({ data }) => {
  return(
    <div>
      Module
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($title: String!, $order: Int!){
    markdownRemark(frontmatter: {
      title: { eq: $title },
      order: { eq: $order }
     }) {
      frontmatter {
        title
        order
      }
      html
    }
  }
`
