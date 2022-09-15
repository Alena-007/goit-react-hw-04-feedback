import { Component } from 'react';
import { StatisticsItems } from './Statistics.styled';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
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
  }
}
