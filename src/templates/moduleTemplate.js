import React from 'react'

const ModuleTemplate = ({ data }) => {
  return(
    <div>
      Module
      <h1 className="heading-xlarge">{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  )
}

export default ModuleTemplate

export const moduleQuery = graphql`
  query currentModuleQuery($title: String!, $order: Int!){
    markdownRemark(frontmatter: {
      title: { eq: $title },
      order: { eq: $order }
     }) {
      frontmatter {
        title
        order
        available_from
        available_to
      }
      html
    }
  }
`
