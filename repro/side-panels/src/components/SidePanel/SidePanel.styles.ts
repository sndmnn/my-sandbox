import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const SidePanelContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  height: 60vh;
  width: 100vw;

  @media screen and (min-width: ${breakpoints.lg}px) {
    right: 0;
    left: unset;

    height: 100vh;
    width: 800px;
  }

  background-color: var(--color-white-100);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

  overflow-y: auto;
`;

export const SidePanelContent = styled.div`
  padding: 24px 32px;
`;
