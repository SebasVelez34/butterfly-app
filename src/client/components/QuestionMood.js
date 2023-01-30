import React from 'react';

const QuestionMood = ({ mood, level }) => {

  return (
    <div className='select-mood'>
        <div className='select-mood-smile'>
        </div>
        <div>
        </div>
      <div className='select-mood-title'>
        <h4 className='select-mood-title-message'>Great! Thank you for your Feedback.</h4>
        <div className='select-mood-title-note'>Your answers will <strong>always remain anonymous</strong></div>
      </div>
    </div>
  )
}


export default QuestionMood;
