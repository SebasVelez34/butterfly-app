import React from 'react';

const Mood = ({ mood }) => {
  //TODO: Validations  and get images from assests
  const url = `https://assets.butterfly.ai/email-images/mood-${mood}.v2.png`;
  return mood && <img className="demo-body__moods__icon" src={url} />
}

export default Mood;