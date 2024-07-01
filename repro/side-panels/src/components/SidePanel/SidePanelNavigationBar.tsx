import React from 'react';
import { Container } from './SidePanelNavigationBar.styles';
import CloseIcon from '@mui/icons-material/Close';
import BackIcon from '@mui/icons-material/ArrowBack';
import { DefaultButton } from '../Buttons/DefaultButton';

interface ComponentProps {
  onClose: () => void;
  onBack?: () => void;
}

/**
 * Navigation bar for side panels. It's intended to be used inside a side panel
 * and only inside a side panel.
 *
 * @param params.title
 * title of the side panel
 *
 * @param params.onClose
 * function to call when the close button is clicked
 *
 * @param params.onBack
 * (optional) function to call when the back button is clicked. You shouldn't provide
 * this function if the side panel is the first one in the stack.
 */
export default function SidePanelNavigationBar({
  onClose,
  onBack,
}: ComponentProps) {
  return (
    <Container>
      <DefaultButton
        onClick={onBack}
        {...(!onBack && { className: 'inactive', disabled: true })}
      >
        <BackIcon />
      </DefaultButton>
      <DefaultButton onClick={onClose}>
        <CloseIcon />
      </DefaultButton>
    </Container>
  );
}
