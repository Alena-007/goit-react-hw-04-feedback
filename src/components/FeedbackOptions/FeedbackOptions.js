import PropTypes from 'prop-types';
import { FeedbackOptionsButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
