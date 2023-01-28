import React from 'react';

const Comment = ({ name = 'ss' }) => {
  return (
    <div className='comment'>
      <div className='comment-form' >
        <textarea
          placeholder='Anything to add or suggest to your manager?'
          name={name}
          className='comment-input'
        />
      </div>
    </div>
  )
}


export default Comment;
