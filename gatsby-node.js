const path = require('path')
const slugify = require('slugify')

exports.createPages = ({boundActionCreators, graphql}) => {

  const { createPage } = boundActionCreators;

  const lessonTemplate = path.resolve('src/templates/lessonTemplate.js')
  const moduleTemplate = path.resolve('src/templates/moduleTemplate.js')
  const pageTemplate = path.resolve('src/templates/pageTemplate.js')

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
      files: allFile {
        edges {
          node {
            absolutePath
            modifiedTime
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
      pages: allMarkdownRemark (
        sort: { order: ASC, fields: [frontmatter___order] },
        filter: {fileAbsolutePath: {regex: "/pages/.*$/"}}
      ) {
    	  edges {
    	    node {
            frontmatter {
              title
              order
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

      // Create the lessons
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

    result.data.modules.edges.forEach(({ node }) => {
      createPage({
        path: `module/${slugify(node.frontmatter.title, {
          lower: true
        })}`,
        component: moduleTemplate,
        context: {
          title: node.frontmatter.title,
          order: node.frontmatter.order
        }
      })
    })

    result.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: `page/${slugify(node.frontmatter.title, {
          lower: true
        })}`,
        component: pageTemplate,
        context: {
          title: node.frontmatter.title,
          order: node.frontmatter.order
        }
      })
    })

  })
}
