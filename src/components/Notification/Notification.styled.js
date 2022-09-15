import styled from 'styled-components';

export const NotificationMessage = styled.p`
  display: inline-block;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.red};
  font-size: ${p => p.theme.fontSizes.l};
`;
