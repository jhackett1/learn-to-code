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

// Prism theme
require("prismjs/themes/prism.css");

class Layout extends React.Component{

  componentDidMount(){
    document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');
    // header navigation toggle

      var els = document.querySelectorAll('.js-header-toggle'),
          i, _i;
      for(i=0,_i=els.length; i<_i; i++){
        els[i].addEventListener('click', function(e){
          e.preventDefault();
          console.log(e)
          var target = document.getElementById(this.getAttribute('href').substr(1)),
              targetClass = target.getAttribute('class') || '',
              sourceClass = this.getAttribute('class') || '';

          if(targetClass.indexOf('js-visible') !== -1){
            target.setAttribute('class', targetClass.replace(/(^|\s)js-visible(\s|$)/, ''));
          } else {
            target.setAttribute('class', targetClass + " js-visible");
          }
          if(sourceClass.indexOf('js-visible') !== -1){
            this.setAttribute('class', sourceClass.replace(/(^|\s)js-visible(\s|$)/, ''));
          } else {
            this.setAttribute('class', sourceClass + " js-visible");
          }
          this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') !== "true");
          target.setAttribute('aria-hidden', target.getAttribute('aria-hidden') === "false");
        });
      }

  }

  render(){
    let data = this.props.data
    let children = this.props.children
    return(
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
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
        <main id="content">
          {children()}
        </main>
        <Footer menu={data.pages} credit={data.site.siteMetadata.credit}/>
      </div>
    )
  }
}



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
