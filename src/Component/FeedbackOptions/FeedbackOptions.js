import React from 'react';
import './FeedbackOptions.css';
import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="feedback">
      {/* console.log(option) */}
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

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
