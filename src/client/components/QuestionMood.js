import React, { useState } from 'react';
import Mood from './Mood';

const QuestionMood = ({ moods, moodValue = 0, handleMood }) => {
  const [activeMood, setActiveMood] = useState(() => moods.find(mood => mood.value === moodValue || 0));

  const handleActiveMood = (activeMood) => {
    const active = moods.find(mood => mood.value === activeMood || 0);
    setActiveMood(active);
    handleMood(active.value);
  }

  const handleSelectMood = (e) => {
    e.preventDefault();
    setActiveMood(0);
  }

  if (activeMood) {
    return <>
      <div className='select-mood'>
        <a href="#" onClick={handleSelectMood}>
          <div className='edit-mood-smile'>
            <svg width="12" height="12" viewBox="0 0 12 12"><title>EditIcon</title><path d="M7.94 7.94L7.27 5.921 3.416 2.067l-1.35 1.35L5.923 7.27l2.017.668zM.28.28a.954.954 0 0 0 0 1.349l.993.993 1.349-1.35L1.629.28a.954.954 0 0 0-1.35 0zm10.97 1.97H5.933l.75.75h4.567v8.25H3V6.683l-.75-.75v5.317c0 .414.336.75.75.75h8.25a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75z" fill="#2CE6CE" fillRule="evenodd"></path></svg>
          </div>
          <div className='select-mood-smile'>
            <Mood mood={activeMood.value} />
          </div>
        </a>
        <div className='select-mood-title'>
          <h4 className='select-mood-title-message'>{activeMood.phrase}</h4>
          <div className='select-mood-title-note'>Your answers will <strong>always remain anonymous</strong></div>
        </div>
      </div>
    </>
  }
  return (
    <div className='mood-container'>
      <div className='mood-select-title'>Did you make a mistake? Please select your current mood:</div>
      <div className='moods-all'>
        {
          moods.map((mood, i) => {
            return (
              <button className='mood-button' key={mood._id} onClick={() => { handleActiveMood(mood.value) }}>
                <Mood mood={mood.value} />
              </button>
            )
          })
        }
      </div>
    </div>
  )
}


export default QuestionMood;
