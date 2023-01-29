import React from 'react';

const Comment = ({ handleChangeComment, name = 'ss' }) => {
  return (
    <div className='comment'>
      <div className='comment-form' >
        <textarea
          placeholder='Anything to add or suggest to your manager?'
          name={name}
          className='comment-input'
          onChange={handleChangeComment}
        />
      </div>
    </div>
  )
}


export default Comment;
