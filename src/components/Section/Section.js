import PropTypes from 'prop-types';
import { Component } from 'react';
import { SectionTitle } from './Section.styled';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionTitle>
        <h2>{title}</h2>
        {children}
      </SectionTitle>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
