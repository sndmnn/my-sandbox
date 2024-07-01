import styled from 'styled-components';
import { ContentWrapper } from '../Containers/ContentWrapper';

export const PageContent = styled(ContentWrapper)`
  margin-top: 2rem;
`;

export const ToDosList = styled.ul`
  list-style: none;
  padding-bottom: 3rem;

  & > :not(:last-child) {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-gray-100);
    margin-bottom: 1rem;
  }
`;
