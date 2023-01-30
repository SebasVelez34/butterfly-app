import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Mood from '../components/Mood';
//TODO: Get images from Assets folder

const MoodSelection = (props) => {
  return <>
    <div className="demo-wrapper">
      <img className="demo-header" src="https://assets.butterfly.ai/email-images/bf-banner.v2.png" />

      <div className="demo-body">
        <div className="demo-body__title">
          <strong>jeje</strong> would like to know:
        </div>

        <div className="demo-body__question">
          How is your week going?
        </div>

        <div className="demo-body__moods">
          {props.data.map(({ value }) =>
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