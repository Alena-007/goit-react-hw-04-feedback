import PropTypes from 'prop-types';
import { StatisticsItems } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StatisticsItems>Good: {good}</StatisticsItems>
      <StatisticsItems>Neutral: {neutral}</StatisticsItems>
      <StatisticsItems>Bad: {bad}</StatisticsItems>
      <StatisticsItems>Total: {total}</StatisticsItems>
      <StatisticsItems>
        Positive feedback: {positivePercentage}%
      </StatisticsItems>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
