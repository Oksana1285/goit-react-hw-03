import css from './Options.module.css';

const Option = ({ onClickFeedback, resetFeedback, resetBtn }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li>
          <button
            className={css.button}
            onClick={() => onClickFeedback('good')}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.button}
            onClick={() => onClickFeedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li>
          <button className={css.button} onClick={() => onClickFeedback('bad')}>
            Bad
          </button>
        </li>
        {resetFeedback >= 1 && (
          <li>
            <button className={css.button} onClick={resetBtn}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Option;
