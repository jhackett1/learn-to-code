import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import slugify from 'slugify'
import LessonNav from '../components/lesson-nav'
import Quiz from '../components/quiz'
import PhaseBanner from '../components/phase-banner'
import LastUpdated from '../components/last-updated'

export default class LessonTemplate extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let data = this.props.data;

    let lastModified = data.files.edges.filter((file)=>{
        if (file.node.absolutePath === data.markdownRemark.fileAbsolutePath) {
          return true
        }
      })[0].node.modifiedTime

    lastModified = new Date(lastModified)

    console.log(data)
    return(
      <div>
        <PhaseBanner showHeaderBar />
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

        <div className="grid-row lesson-content">
          <div className="column-two-thirds">
            <h1 className="heading-xlarge">{data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            {(data.markdownRemark.frontmatter.plenary_question) ?
              <Quiz question={data.markdownRemark.frontmatter.plenary_question} answers={data.markdownRemark.frontmatter.plenary_answers}/>
            : ""}
            <LessonNav allLessons={data.lessons} thisLesson={data.markdownRemark}/>
            <LastUpdated lastModified={lastModified}/>
          </div>
          <div className="column-one-third mobile-hide">
            <h5 className="minimap">Part of {data.markdownRemark.frontmatter.module}</h5>
            <ol className="minimap-list">
              {data.lessons.edges.filter(lesson => {
                if (lesson.node.frontmatter.module === data.markdownRemark.frontmatter.module) return lesson
              }).map((lesson, i) => (
                <li key={i} className={(lesson.node.frontmatter.title === data.markdownRemark.frontmatter.title) ? "current" : ""}>
                {lesson.node.frontmatter.title}
                {(lesson.node.frontmatter.type === 'project') ? <span className="project-badge">P</span> : ""}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export const lessonQuery = graphql`
  query currentLessonQuery($title: String!, $module: String!){
    markdownRemark(frontmatter: {
      title: { eq: $title },
      module: { eq: $module }
     }) {
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
    files: allFile {
      edges {
        node {
          absolutePath
          modifiedTime
        }
      }
    }
    lessons: allMarkdownRemark (
      sort: { order: ASC, fields: [frontmatter___order] },
      filter: {fileAbsolutePath: {regex: "/lessons/.*$/"}}
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            type
            module
            order
          }
        }
      }
    }
  }
`
