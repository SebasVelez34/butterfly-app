import React from 'react';

const Comment = ({ handleChangeComment, tag }) => {
  return (
    <div className='comment'>
      <div className='comment-form' >
        <textarea
          placeholder={`Anything to add for ${tag} ?`}
          name={tag}
          className='comment-input'
          onChange={handleChangeComment}
        />
      </div>
    </div>
  )
}


export default Comment;
