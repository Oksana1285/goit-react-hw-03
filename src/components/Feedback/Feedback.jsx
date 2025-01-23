import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.wrap}>
      {Object.entries(feedback).map((item, id) => {
        return (
          <li className={css.text} key={id}>
            {item[0]}: <b>{item[1]}</b>
          </li>
        );
      })}
      <li>
        Total: <b>{totalFeedback}</b>
      </li>
      <li>
        Positive: <b>{positiveFeedback}%</b>
      </li>
    </ul>
  );
};

export default Feedback;
