import React from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'

import logo from '../../node_modules/govuk_template_ejs/assets/images/gov.uk_logotype_crown_invert_trans.png'

const Header = ({ menu }) => (

  <header role="banner" id="global-header" className='with-proposition'>
    <div className="header-wrapper">
      <div className="header-global">
        <div className="header-logo">
          <Link to="/" id="logo" className="content">
            <img src={logo} width="36" height="32" alt="" /> DDaT Codelabs
          </Link>
        </div>
      </div>
        <div className="header-proposition">
          <div className="content">
            <nav id="proposition-menu">
              <ul id="proposition-links">
                {menu.edges.map(page=>(
                  <li><Link to={`/page/${slugify(page.node.frontmatter.title, {lower: true})}`}>{page.node.frontmatter.title}</Link></li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
    </div>
  </header>

)

export default Header
