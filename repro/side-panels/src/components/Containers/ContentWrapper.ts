import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const ContentWrapper = styled.div<{ maxWidth?: number }>`
  padding: 0 24px;

  @media screen {
    ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}px;` : '')}
  }

  @media screen and (min-width: ${breakpoints.xl1}px) {
    padding: 0 40px;
  }

  @media screen and (min-width: ${breakpoints.xl6 + 80}px) {
    margin: 0 auto;
    padding: 0;
  }

  @media print {
    margin: 0;
    padding: 0;
  }
`;
