import styled from 'styled-components';
import Color from '../../styles/colors';

const backgroundColor = new Color('black-200').withAlpha(0.25).rgba();

export const SidePanelStack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${backgroundColor};
  backdrop-filter: blur(5px);

  z-index: 11;
`;
