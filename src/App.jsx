import css from './App.module.css';

import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Option from './components/Options/Options';

import { useState, useEffect } from 'react';

const reviewsType = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const savedFeedback = () => {
  return window.localStorage.getItem('feedback-data') !== null
    ? JSON.parse(localStorage.getItem('feedback-data'))
    : reviewsType;
};

const App = () => {
  const [feedback, setFeedback] = useState(savedFeedback);

  useEffect(() => {
    window.localStorage.setItem('feedback-data', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setFeedback(reviewsType);
    }
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  const resetFeedbackBtn = () => setFeedback(reviewsType);

  return (
    <div className={css.container}>
      <Description />
      <Option
        onClickFeedback={feedbackType => updateFeedback(feedbackType)}
        resetFeedback={totalFeedback >= 1}
        resetBtn={resetFeedbackBtn}
      />
      {totalFeedback >= 1 && (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}{' '}
      {totalFeedback < 1 && <Notification />}
    </div>
  );
};

export default App;
