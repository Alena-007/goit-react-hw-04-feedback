import styled from 'styled-components';

export const FeedbackOptionsButton = styled.button`
  width: 150px;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  text-transform: uppercase;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  &:hover {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
