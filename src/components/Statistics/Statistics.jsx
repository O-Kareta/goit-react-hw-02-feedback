import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2 className={css.title}>Statistics:</h2>
      <p className={css.subtitle}>Good: {good}</p>
      <p className={css.subtitle}>Neutral: {neutral}</p>
      <p className={css.subtitle}>Bad: {bad}</p>
      <p className={css.resultTitle}>Total: {total}</p>
      <p className={css.resultTitle}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
