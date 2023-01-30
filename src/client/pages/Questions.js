import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import QuestionForm from "../components/QuestionsForm";

const Questions = (props) => {
  const [data, setData] = useState(() => {
    let newData = props.data;
    if (typeof window !== "undefined") {
      newData = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    }
    return newData;
  });

  const [loading, setLoading] = useState(data ? false : true);

  const { value } = useParams();

  useEffect(() => {
    if (!data) {
      setLoading(true);

      props.fetchInitialData(value).then((data) => {
        setData(data);
        setLoading(false);
      });
    }

  }, []);

  if (loading === true) {
    return <i className="loading">🤹‍♂️</i>;
  }
  
  return <>
    <div id="app">
      <div className="sidebar"></div>
      <div className="main">
        <div>
          <div className="mood">
            <QuestionForm  {...data} />
          </div>
        </div>
      </div>
    </div>
  </>
};

export default Questions;
