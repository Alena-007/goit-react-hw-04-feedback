import { Component } from 'react';
import { FeedbackOptionsButton } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => (
          <FeedbackOptionsButton
            key={option}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </FeedbackOptionsButton>
        ))}
      </div>
    );
  }
}
