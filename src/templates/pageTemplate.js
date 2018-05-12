import React from 'react'

const PageTemplate = ({ data }) => {
  return(
    <div className="grid-row">

      <div className="column-two-thirds">
        <h1 className="heading-xlarge">{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>

      <div className="column-one-third">
      </div>
      
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
