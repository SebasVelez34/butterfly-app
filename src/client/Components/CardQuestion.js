import React from 'react';

import Stars from './Stars';
import Comment from './Comment';

const CardQuestion = (props) => {
  const { title } = props
  return (
    <div className='question-card'>
      <div className="question">{title}</div>
      <Stars />
      <button name={`revealCommentField1`} className='comment-button' type='button'>add a comment</button>
      <Comment />
    </div>
  )
}


export default CardQuestion;