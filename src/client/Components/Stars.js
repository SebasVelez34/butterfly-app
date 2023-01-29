import React from 'react';

const Stars = (props) => {
  const stars = [];
  for (let i = 0; i < 10; i++) {
    stars.push(
      <a className="star" data-star={i} key={i}>
        <svg className="star-icon" width="22" height="22" viewBox="0 0 22 22">
          <title>StarIcon</title>
          <path d="M11 0l3.399 6.94L22 8.054l-5.5 5.402 1.298 7.628-6.798-3.6-6.798 3.6L5.5 13.455 0 8.053l7.6-1.112z" fill="#FFF" fillRule="evenodd"></path>
        </svg>
      </a>
    );
  }
  return (
    <div className='rating-group'>
      <div className="stars-meter">
        {stars}
      </div>
      <div className='star-text'>
        <div className='disagree'>Strongly Disagree</div>
        <div className='agree'>Strongly Agree</div>
      </div>
    </div>
  )
}


export default Stars;
