import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (

  <footer className="group js-footer" id="footer" role="contentinfo">
    <div className="footer-wrapper">
      <div className="footer-meta">
        <div className="footer-meta-inner">
              <ul>
                <li><Link to="/">Link</Link></li>
              </ul>
          }
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

export default Footer
