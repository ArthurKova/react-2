import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from 'Component/Section/';
import Statistics from 'Component/Statistics/';
import FeedbackOptions from './Component/FeedbackOptions';

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
        <h1>Please leave a feedback</h1>
        <Section title="feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="statistics">
          <h2>Statistics</h2>
          {this.countTotalFeedback() === 0 ? null : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
        {this.countTotalFeedback() === 0 ? <p>No feedback given yet</p> : null}
      </>
    );
  }
}

export default App;
