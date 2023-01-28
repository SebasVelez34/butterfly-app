import React from 'react';
import { Link } from 'react-router-dom'

import Mood from '../Components/Mood';
const moods = [
  { value: 1, mood: 'VeryUnhappy' },
  { value: 2, mood: 'Unhappy' },
  { value: 3, mood: 'Neutral' },
  { value: 4, mood: 'Happy' },
  { value: 5, mood: 'VeryHappy' }
]
const companyName = "DEMO INC."

const MoodSelection = () => {
  //TODO: Get Moods from database
  //TODO: DEMO INC company name get from database
  //TODO: Get images from Assets folder
  return <>
    <div className="demo-wrapper">
      <img className="demo-header" src="https://assets.butterfly.ai/email-images/bf-banner.v2.png" />

      <div className="demo-body">
        <div className="demo-body__title">
          <strong>{companyName}</strong> would like to know:
        </div>

        <div className="demo-body__question">
          How is your week going?
        </div>

        <div className="demo-body__moods">
          {moods.map(({value}) =>
            <Link to={`/questions/${value}`} key={value}>
              <Mood mood={value} />
            </Link>)}
        </div>

        <div className="demo-body__anonymous">
          Your answer will always remain anonymous
        </div>
      </div>

      <div className="demo-footer">
        <div className="demo-footer__motto">
          Butterfly. Your Team's Happiness Manager.
        </div>

        <div className="demo-footer__copy">
          Butterfly, Inc. - 604 East Butterfly Street, BT 10009<br />
          ©2023 Butterfly, Inc. All rights reserved.
        </div>
      </div>
    </div>
  </>
}

export default MoodSelection;