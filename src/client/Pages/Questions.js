import React from "react";
import QuestionForm from "../Components/QuestionsForm";

const Questions = () => {
  return <>
    <div id="app">
      <div className="sidebar"></div>
      <div className="main">
        <div>
          <div className="mood">
            <QuestionForm />
          </div>
        </div>
      </div>
    </div>
  </>
};

export default Questions;
