import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div>
    <div className="breadcrumbs">
      <ol role="breadcrumbs">
        <li>
          <Link to="/">DDaT Codelabs</Link>
        </li>
        <li>Give feedback</li>
      </ol>
    </div>

    <h1 className="heading-xlarge">Give feedback</h1>

    <div className="grid-row">
      <div className="column-two-thirds">
      <form>

        <div className="form-group">
          <fieldset>
            <legend>
              <h1 className="heading-medium">
                How would you describe your current coding experience?
              </h1>
            </legend>
            <div className="multiple-choice">
              <input id="no-experience" type="radio" name="experience" value="No experience" required/>
              <label htmlFor="no-experience">No experience</label>
            </div>
            <div className="multiple-choice">
              <input id="some-experience" type="radio" name="experience" value="Some experience" required/>
              <label htmlFor="some-experience">Some experience</label>
            </div>
            <div className="multiple-choice">
              <input id="lots-experience" type="radio" name="experience" value="Lots of experience" required/>
              <label htmlFor="lots-experience">Plenty of experience</label>
            </div>
          </fieldset>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">
            <h2 className="heading-medium">
              How can we improve DDaT Codelabs?
            </h2>
          </label>
          <textarea className="form-control form-control-3-4" name="message" id="message" rows="5" required></textarea>
        </div>

        <input type="hidden" name="moduleNumber" value="All"/>

        <div className="form-group">
          <input className="button" type="submit" value="Send feedback"/>
        </div>
      </form>

      <p>You can discuss DDaT Codelabs on channel #ddat-codelabs on the cross-government digital Slack team.</p>
      <p>If you'd like to help improve DDaT Codelabs yourself, get in touch, we're always looking for volunteers, particularly content designers, user researchers and technical experts.</p>
    </div>
  </div>

  </div>
)
