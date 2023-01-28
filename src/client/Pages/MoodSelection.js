import React from 'react';

const MoodSelection = () => {
  return <>
    <div className="demo-wrapper">
      <img className="demo-header" src="https://assets.butterfly.ai/email-images/bf-banner.v2.png" />

      <div className="demo-body">
        <div className="demo-body__title">
          <strong>DEMO INC.</strong> would like to know:
        </div>

        <div className="demo-body__question">
          How is your week going?
        </div>

        <div className="demo-body__moods">
          <a href="/demo-question/1"><img className="demo-body__moods__icon" src="https://assets.butterfly.ai/email-images/mood-1.v2.png" /></a>
          <a href="/demo-question/2"><img className="demo-body__moods__icon" src="https://assets.butterfly.ai/email-images/mood-2.v2.png" /></a>
          <a href="/demo-question/3"><img className="demo-body__moods__icon" src="https://assets.butterfly.ai/email-images/mood-3.v2.png" /></a>
          <a href="/demo-question/4"><img className="demo-body__moods__icon" src="https://assets.butterfly.ai/email-images/mood-4.v2.png" /></a>
          <a href="/demo-question/5"><img className="demo-body__moods__icon" src="https://assets.butterfly.ai/email-images/mood-5.v2.png" /></a>
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
          Appynest, Inc. - 604 East Eleven Street, NY 10009<br/>
            ©2023 Appynest, Inc. All rights reserved.
        </div>
      </div>
    </div>
  </>
}

export default MoodSelection;