import React, { useState } from 'react';

import Stars from './Stars';
import Comment from './Comment';

const CardQuestion = ({ handleCardQuestion, title, questionId = 1, handleButton }) => {
  const [comment, setComment] = useState(false);
  const [value, setValue] = useState({
    questionId,
    answer: null,
    comment: ''
  });

  const handleClickShowComment = () => {
    setComment(true)
  }

  const handleChangeComment = (e) => {
    setValue(prev => {
      return {
        ...prev,
        comment: e.target.value
      }
    });
    handleCardQuestion(questionId, value);
  }

  const handleChangeStar = (e) => {
    handleClickShowComment();
    setValue(prev => {
      return {
        ...prev,
        answer: e.target.getAttribute('data-star')
      }
    });
    handleCardQuestion(questionId, value);
    handleButton();
  }

  return (
    <div className='question-card'>
      <div className="question">{title}</div>
      <Stars
        handleChangeStar={handleChangeStar}
      />
      <button onClick={handleClickShowComment} name={`revealCommentField1`} className='comment-button' type='button'>add a comment</button>
      {comment && <Comment handleChangeComment={handleChangeComment} />}
    </div>
  )
}


export default CardQuestion;