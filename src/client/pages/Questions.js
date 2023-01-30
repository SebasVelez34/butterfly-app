import React, { useState } from "react";
import QuestionForm from "../components/QuestionsForm";

const Questions = (props) => {
  const [data, setData] = useState(() => {
    return typeof window !== "undefined"
      ? window.__INITIAL_DATA__
      : props.data
  });
  return <>
    <div id="app">
      <div className="sidebar"></div>
      <div className="main">
        <div>
          <div className="mood">
            <QuestionForm  { ...data } />
          </div>
        </div>
      </div>
    </div>
  </>
};

export default Questions;
