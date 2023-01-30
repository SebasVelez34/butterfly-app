import React, { useState } from 'react';
import CardQuestion from "../components/CardQuestion";
import QuestionMood from "../components/QuestionMood";
import ExtraComment from './ExtraComment';
import { Answer } from '../services'
import ThankYou from './ThankYou';


const QuestionForm = ({ mood, questions, moodValue, company }) => {
  const [form, setForm] = useState({
    mood: moodValue,
    answers: {},
    anythingToAdd: ''
  });
  console.log("🚀 ~ file: QuestionsForm.js:15 ~ QuestionForm ~ form", form)
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
    console.log("🚀 ~ file: QuestionsForm.js:29 ~ handleCardQuestion ~ questionId", questionId)
    console.log("🚀 ~ file: QuestionsForm.js:29 ~ handleCardQuestion ~ value", value)
    setForm(prev => {
      
      prev.answers[questionId] = value;
      console.log("PREV",prev.answers[questionId])
      return {
        ...prev
      }
    });
  }

  const handleMood = (newMood) => {
    setForm(prev => {
      return {
        ...prev,
        mood: newMood
      }
    });
  }

  const handleButton = () => {
    setResponses(prev => ++prev);
    if (responses === questions.length && form.mood > 0) {
      setShowButton(true);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = await Answer.saveAnswers({ answers: form, companyId: company._id })
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
              <QuestionMood
                moods={mood}
                moodValue={moodValue}
                handleMood={handleMood}
              />
            </div>
            <div className="question-form">
              <h1>Do you agree with the following statements:</h1>
              <div>
                <form onSubmit={handleSubmit}>
                  {
                    questions && questions.map(({ title, tag, _id }) => {
                      return (
                        <CardQuestion
                          title={title}
                          questionId={_id}
                          tag={tag}
                          key={_id}
                          handleCardQuestion={handleCardQuestion}
                          handleButton={handleButton}
                        />
                      )
                    })
                  }
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