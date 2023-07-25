export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback:</h2>
      {Object.keys(options).map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
