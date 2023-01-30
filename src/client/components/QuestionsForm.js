import React, { useState } from 'react';
import CardQuestion from "../components/CardQuestion";
import QuestionMood from "../components/QuestionMood";
import ExtraComment from './ExtraComment';
import { Answer } from '../services'
import ThankYou from './ThankYou';
const companyId = '63d6914ba76bbbcbab9bdf43';


const QuestionForm = () => {
  const questions = 5;
  const [form, setForm] = useState({
    mood: 1,
    answers: {},
    anythingToAdd: ''
  });
  const [submitForm, setSubmitForm] = useState(false);
  const [responses, setResponses] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const handleChangeExtraComment = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      anythingToAdd: e.target.value
    })
  }

  const handleCardQuestion = (questionId, value) => {
    setForm(prev => {
      prev.answers[questionId] = value;
      return {
        ...prev
      }
    });
  }

  const handleButton = () => {
    setResponses(prev => ++prev);
    if (responses === questions) {
      setShowButton(true);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = await Answer.saveAnswers({ answers: form, companyId })
    if (request.ok) {
      setSubmitForm(true);
    }
  }

  return (
    <>
      {
        !submitForm ?
          <>
            <div className="mood">
              <QuestionMood />
            </div>
            <div className="question-form">
              <h1>Do you agree with the following statements:</h1>
              <div>
                <form onSubmit={handleSubmit}>
                  <CardQuestion
                    title="I am satisfied with my roles and responsibilities.1"
                    handleCardQuestion={handleCardQuestion}
                    questionId={1}
                    handleButton={handleButton}
                  />
                  <CardQuestion
                    title="I am satisfied with my roles and responsibilities.2"
                    handleCardQuestion={handleCardQuestion}
                    questionId={2}
                    handleButton={handleButton}
                  />
                  <CardQuestion
                    title="I am satisfied with my roles and responsibilities.2"
                    handleCardQuestion={handleCardQuestion}
                    questionId={3}
                    handleButton={handleButton}
                  />
                  <CardQuestion
                    title="I am satisfied with my roles and responsibilities.2"
                    handleCardQuestion={handleCardQuestion}
                    questionId={4}
                    handleButton={handleButton}
                  />
                  <CardQuestion
                    title="I am satisfied with my roles and responsibilities.2"
                    handleCardQuestion={handleCardQuestion}
                    questionId={5}
                    handleButton={handleButton}
                  />
                  <ExtraComment handleChange={handleChangeExtraComment} />
                  <button type='submit' disabled={!showButton} className='submit-button'>Send</button>
                </form>
              </div>
            </div>
          </>
          :
          <ThankYou />
      }
    </>
  )
}

export default QuestionForm;