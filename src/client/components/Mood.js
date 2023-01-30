import React from 'react';

const Mood = ({ mood, width= 36, height=37 }) => {
  const url = `https://assets.butterfly.ai/email-images/mood-${mood}.v2.png`;
  return mood && <img className="demo-body__moods__icon" src={url} width={width} height={height}/>
}

export default Mood;