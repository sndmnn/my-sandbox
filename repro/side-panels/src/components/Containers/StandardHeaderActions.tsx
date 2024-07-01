import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import breakpoints from '../../styles/breakpoints';
import { SecondaryButton } from '../Buttons/SecondaryButton';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import {
  MoreActionsContainer,
  MoreButton,
} from './StandardHeaderActions.styles';

export interface Action {
  /**
   * Title of the action to be displayed as text in the button
   */
  title: string;

  /**
   * (Optional) icon to display to the left of the title
   */
  icon?: React.ReactNode;

  /**
   * Handler function to call when the action is clicked
   */
  handler: () => void;

  /**
   * (Optional) variant to apply to the button
   */
  variant?: 'danger';
}

interface ComponentProps {
  /**
   * Primary action to display as a primary button in the header
   */
  primaryAction: Action;

  /**
   * List of secondary actions to display in the header
   */
  secondaryActions: Action[];

  /**
   * Function to push a new panel onto the stack
   */
  pushPanel: (panel: JSX.Element, title: string, expandUrl?: string) => void;

  /**
   * Additional class name to apply to the component
   */
  className?: string;

  /**
   * Breakpoint at which to hide the secondary actions behind a "More" button
   */
  breakpoint?: number;
}

/**
 * Standard header actions component. Receives a primary action and a list of secondary actions
 * to display in the header. If the screen width is less than the breakpoint, the secondary actions
 * will be hidden behind a "More" button.
 *
 * The secondary actions will be displayed left-to-right in the order they are provided. If there is
 * only one secondary action, it will be displayed to the left of the primary action instead of the
 * "More" button.
 */
export default function StandardHeaderActions({
  primaryAction,
  secondaryActions,
  pushPanel,
  className = '',
  breakpoint = breakpoints.md,
}: ComponentProps) {
  const { width } = useWindowSize();

  function handleOpenMoreActions() {
    pushPanel(
      <MoreActionsContainer>
        {secondaryActions.map((action, index) => (
          <MoreButton
            key={index}
            onClick={action.handler}
            variant={action.variant}
          >
            {action.icon}
            <span>{action.title}</span>
          </MoreButton>
        ))}
      </MoreActionsContainer>,
      'More',
    );
  }

  let secondaryActionsComponent = <></>;

  if (width > breakpoint || secondaryActions.length === 1) {
    secondaryActionsComponent = (
      <>
        {secondaryActions
          // Copy the array to avoid mutating the original
          .slice()
          // Reverse the array to display the actions in the correct order
          .reverse()
          .map((action, index) => (
            <SecondaryButton
              key={index}
              onClick={action.handler}
              variant={action.variant}
            >
              {action.icon}
              <span>{action.title}</span>
            </SecondaryButton>
          ))}
      </>
    );
  } else if (secondaryActions.length > 1) {
    secondaryActionsComponent = (
      <SecondaryButton onClick={handleOpenMoreActions}>More</SecondaryButton>
    );
  }

  return (
    <div className={'actions ' + className}>
      {secondaryActionsComponent}
      <PrimaryButton onClick={primaryAction.handler}>
        {primaryAction.icon}
        <span>{primaryAction.title}</span>
      </PrimaryButton>
    </div>
  );
}
