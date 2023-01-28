import React from 'react';
import CardQuestion from "../Components/CardQuestion";
import QuestionMood from "../Components/QuestionMood";

const QuestionForm = () => {
  return (
    <>
      <div className="mood">
      <QuestionMood />
      </div>
      <div className="question-form">
        <h1>Do you agree with the following statements:</h1>
        <div>
          <form>
            <CardQuestion title="I am satisfied with my roles and responsibilities.1" />
            <CardQuestion title="I am satisfied with my roles and responsibilities.2" />
            <CardQuestion title="I am satisfied with my roles and responsibilities.3" />
            <CardQuestion title="I am satisfied with my roles and responsibilities.4" />
            <CardQuestion title="I am satisfied with my roles and responsibilities.5" />
          </form>
        </div>
      </div>
    </>
  )
}

export default QuestionForm;