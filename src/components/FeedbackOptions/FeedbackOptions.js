import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => (
          <button key={option} name={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        ))}
      </div>
    );
  }
}
