import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from 'Component/Section/';
import Statistics from 'Component/Statistics/';
import FeedbackOptions from './Component/FeedbackOptions/';
import Notification from 'Component/Notification/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = data => {
    const key = data.currentTarget.textContent.toLowerCase();
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.ceil((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="feedback">
          <h1>Please leave a feedback</h1>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <h2>Statistics</h2>
          {this.countTotalFeedback() === 0 ? (
            <Notification />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
