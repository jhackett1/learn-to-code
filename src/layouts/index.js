import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/header'
import Footer from '../components/footer'

import '../../node_modules/govuk_template_ejs/assets/stylesheets/govuk-template.css'
import '../../node_modules/govuk_template_ejs/assets/stylesheets/fonts.css'
import opengraphLogo from '../../node_modules/govuk_template_ejs/assets/images/opengraph-image.png'
import favicon from '../../node_modules/govuk_template_ejs/assets/images/favicon.ico'

import './index.sass'

const Layout = ({data, children}) => (
  <div>
    <div id="skiplink-container">
      <div>
        <Link to="#" className="skiplink">Skip to main content</Link>
      </div>
    </div>
    <Helmet
      title={"meh"}
      meta={[
        { name: 'og:image', content: opengraphLogo},
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'theme-color', content: '#0b0c0c'},
      ]}
      link={[
        {rel: "shortcut icon", href: favicon, type: "image/x-icon"}
      ]}
    />
    <Header title={data.site.siteMetadata.title} menu={data.pages}/>
    {children()}
    <Footer menu={data.pages} credit={data.site.siteMetadata.credit}/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query menuQuery {
    site {
      siteMetadata {
        title
        credit
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
        }
      }
    }
  }

`
