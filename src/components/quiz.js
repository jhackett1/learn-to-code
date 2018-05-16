import React from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'

export  default ({ question, answers }) => (
  <form className="plenary-quiz">
    <div className="form-group">
      <fieldset>
        <legend>
          <h3 className="heading-medium">{question}</h3>
        </legend>
        {answers.map((answer, i) =>(
          <div key={i} className="multiple-choice">
            <input id={`radio-${i}`} type="radio" name="radio-group" value={answer.answer}/>
            <label htmlFor={`radio-${i}`}>{answer.answer}</label>
          </div>
        ))}
      </fieldset>
    </div>
    <button className="button" type="submit">Check answer</button>
  </form>
)
