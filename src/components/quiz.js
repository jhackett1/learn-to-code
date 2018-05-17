import React from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'

export default class Quiz extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      checked: false,
      selectedAnswer: ""
    }
  }

  render(){
    let question = this.props.question
    let answers = this.props.answers

    let handleAnswerSelect = (e) => {
      this.setState({
        selectedAnswer: e.target.value
      })
    }

    let checkAnswer = (e) => {
      e.preventDefault()
      if (this.state.selectedAnswer !== "") {
        this.setState({checked: true})
      }
    }

    return(
      <form className="plenary-quiz">
        <div className="form-group">
          <fieldset>
            <legend>
              <h3 className="heading-medium">{question}</h3>
            </legend>
            {answers.map((answer, i) =>(
              <div key={i} className="multiple-choice">
                <input id={`radio-${i}`} type="radio" name="radio-group" value={answer.answer} checked={this.state.selectedAnswer === answer.answer} onChange={handleAnswerSelect} disabled={this.state.checked} required/>
                <label htmlFor={`radio-${i}`}>{answer.answer}</label>
                {(answer.correct) ? <span className={(this.state.checked ? "answer-icon correct visible" : "answer-icon correct")}>&#10004;</span> : <span className={(this.state.checked ? "answer-icon incorrect visible" : "answer-icon incorrect")}>&#10006;</span> }
              </div>
            ))}
          </fieldset>
        </div>
        <button className={(this.state.checked ? "button disabled" : "button")} type="submit" onClick={checkAnswer}>Check answer</button>
      </form>
    )
  }
}
