import React from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'

export default ({menu, credit}) => (
  <footer className="group js-footer" id="footer" role="contentinfo">
    <div className="footer-wrapper">
      <div className="footer-meta">
        <div className="footer-meta-inner">
          <ul>
            {menu.edges.map(page=>(
              <li key={page.node.frontmatter.title}><Link to={`/page/${slugify(page.node.frontmatter.title, {lower: true})}`}>{page.node.frontmatter.title}</Link></li>
            ))}
            <li><a href="https://goo.gl/forms/MROusZVjSG8AtNVR2">Feedback</a></li>
            <li>{credit}</li>
          </ul>
          <div className="open-government-licence">
            <p className="logo"><a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence</a></p>
            <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</p>
          </div>
        </div>

        <div className="copyright">
          <a href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright-and-re-use/crown-copyright/">© Crown copyright</a>
        </div>
      </div>
    </div>
  </footer>
)
