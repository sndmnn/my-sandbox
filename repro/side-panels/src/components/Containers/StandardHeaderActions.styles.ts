import styled from 'styled-components';
import { SecondaryButton } from '../Buttons/SecondaryButton';

export const MoreActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MoreButton = styled(SecondaryButton)`
  justify-content: flex-start;
`;
