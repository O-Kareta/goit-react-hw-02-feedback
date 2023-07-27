import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        backgroundColor: '#eff3f6',
      }}
    >
      <Section title="Collecting feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="">
        {feedback.good + feedback.neutral + feedback.bad > 0 ? (
          <Statistics {...feedback} />
        ) : (
          <p>There is no feedback</p>
        )}
      </Section>
    </div>
  );
};
