export const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  return (
    <div>
      <h2>Statistics:</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
    </div>
  );
};
