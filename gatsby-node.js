const path = require('path')
const slugify = require('slugify')

exports.createPages = ({boundActionCreators, graphql}) => {

  const { createPage } = boundActionCreators;

  const lessonTemplate = path.resolve('src/templates/lessonTemplate.js')

  return graphql(`
    {
      lessons: allMarkdownRemark (
        sort: { order: ASC, fields: [frontmatter___order] },
        filter: {fileAbsolutePath: {regex: "/lessons/.*$/"}}
      ) {
        edges {
          node {
            fileAbsolutePath
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
      }
    }
  `).then(result => {
    if(result.errors){
      return Promise.reject(result.errors)
    }
    result.data.lessons.edges.forEach(({ node }) => {
      createPage({
        path: `lesson/${slugify(node.frontmatter.title, {
          lower: true
        })}`,
        component: lessonTemplate,
        context: {
          title: node.frontmatter.title,
          module: node.frontmatter.module
        }
      })
    })
  })
}
