import styled from 'styled-components';

export const SectionTitle = styled.section`
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  border-radius: ${p => p.theme.space[4]}px;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);

  & h2 {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
