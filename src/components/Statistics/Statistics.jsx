import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  return (
    <div>
      <h2 className={css.title}>Statistics:</h2>
      <p className={css.subtitle}>Good: {good}</p>
      <p className={css.subtitle}>Neutral: {neutral}</p>
      <p className={css.subtitle}>Bad: {bad}</p>
      <p className={css.resultTitle}>Total: {countTotalFeedback()}</p>
      <p className={css.resultTitle}>
        Positive feedback: {countPositiveFeedbackPercentage()}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
