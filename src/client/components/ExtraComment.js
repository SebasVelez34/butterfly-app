import React from 'react';

const ExtraComment =  ({handleChange, extraInput}) => {
  return (
    <div className='extra'>
      <div className='question extra'>Anything to Add?</div>
      <div className='extra-note'>extra feedback helps</div>
        <textarea
          name='extraInput'
          className='extra-input'
          placeholder='Express yourself freely and safely.  This will always remain anonymous'
          onChange={handleChange}
          value={extraInput}
          ></textarea>
    </div>
  )
}

export default ExtraComment;