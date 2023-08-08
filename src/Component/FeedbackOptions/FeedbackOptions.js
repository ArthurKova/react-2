import React from 'react';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="feedback">
      {options.map(option => (
        <li key={option} className="feedback__item">
          <button
            type="button"
            onClick={onLeaveFeedback}
            className="feedback__button"
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
