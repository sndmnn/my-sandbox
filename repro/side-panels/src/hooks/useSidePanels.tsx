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

/**
 * Hook that wraps the logic to manage side panels. It's designed to avoid using
 * contexts, as they proved not to be the best solution for this case.
 */
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
   * Pushes a new panel to the stack. If the window is too small, it will navigate
   * to the expandUrl instead.
   *
   * @param content
   * @param title
   * @param expandUrl
   */
  function pushPanel(content: JSX.Element, title: string, expandUrl?: string) {
    setPanels((panels) => {
      const newPanels = [...panels];

      const newPanel = (
        <SidePanelContainer key={Math.random()}>
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

  function popPanel() {
    setPanels((panels) => {
      const newPanels = [...panels];
      newPanels.pop();
      return newPanels;
    });
  }

  function clearPanels() {
    setPanels([]);
  }

  return { pushPanel, popPanel, clearPanels, panels };
}