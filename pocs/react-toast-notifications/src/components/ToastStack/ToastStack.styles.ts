import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 24px;
  overflow: hidden;

  max-width: 360px;

  & > :not(:last-child) {
    margin-bottom: 8px;
  }
`;
