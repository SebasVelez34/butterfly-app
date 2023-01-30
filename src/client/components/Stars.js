import React, { useState } from 'react';

const Stars = ({ handleChangeStar }) => {
  const [selected, setSelected] = useState();

  const handleSelected = (e) =>{
    if(selected){
      selected.classList.remove('selected');
    }
    e.target.classList.add('selected');
    setSelected(e.target);
    handleChangeStar(e);
  }
  const stars = [];
  for (let i = 10; i >= 1; i--) {
    stars.push(
      <a className="star" data-star={i} key={i} onClick={handleSelected}>
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
