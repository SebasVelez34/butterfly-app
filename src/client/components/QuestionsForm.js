import React, { useState } from 'react';
import CardQuestion from "../components/CardQuestion";
import QuestionMood from "../components/QuestionMood";
import ExtraComment from './ExtraComment';

const QuestionForm = () => {
  const questions = 5;
  const [form, setForm] = useState({
    mood: null,
    question: {},
    anythingToAdd: ''
  });

  const [answers, setAnswers] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const handleChangeExtraComment = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      anythingToAdd: e.target.value
    })
  }

  const handleCardQuestion = (questionId,value) => {
    setForm(prev => {
      prev.question[questionId] = value;
      return {
        ...prev
      }
    });
  }

  const handleButton = () => {
   setAnswers(prev => ++prev);
   if(answers === questions){
    setShowButton(true);
   }
  }

  return (
    <>
      <div className="mood">
        <QuestionMood />
      </div>
      <div className="question-form">
        <h1>Do you agree with the following statements:</h1>
        <div>
          <form>
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
  )
}

export default QuestionForm;