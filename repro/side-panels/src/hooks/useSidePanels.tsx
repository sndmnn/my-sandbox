import React from 'react';
import {
  SidePanelContainer,
  SidePanelContent,
  SidePanelNavigationBar,
} from '../components/SidePanel';

export type PushPanelFunction = (
  content: JSX.Element,
  title: string,
  expandUrl: string,
) => void;

export type PopPanelFunction = () => void;

export default function useSidePanels() {
  const [panels, setPanels] = React.useState<JSX.Element[]>([]);

  React.useEffect(() => {
    function escapeListener(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        clearPanels();
      }
    }

    document.addEventListener('keydown', escapeListener);

    return () => {
      document.removeEventListener('keydown', escapeListener);
    };
  }, []);

  /**
   * Pushes a new panel to the stack.
   *
   * @param content JSX element to render in the panel
   * @param title Title of the panel
   * @param expandUrl (optional) URL to navigate to when the expand button is clicked
   */
  function pushPanel(content: JSX.Element, title: string, expandUrl?: string) {
    setPanels((panels) => {
      const newPanels = [...panels];

      const key = Math.random();

      const newPanel = (
        <SidePanelContainer key={key}>
          <SidePanelNavigationBar
            title={title}
            expandUrl={expandUrl}
            onClose={clearPanels}
            {...(newPanels.length > 0 && { onBack: popPanel })}
          />
          <SidePanelContent>{content}</SidePanelContent>
        </SidePanelContainer>
      );

      newPanels.push(newPanel);

      return newPanels;
    });
  }

  /**
   * Pops the top panel from the stack.
   */
  function popPanel() {
    setPanels((panels) => {
      const newPanels = [...panels];
      newPanels.pop();
      return newPanels;
    });
  }

  /**
   * Clears all panels from the stack.
   */
  function clearPanels() {
    setPanels([]);
  }

  return { pushPanel, popPanel, clearPanels, panels };
}
