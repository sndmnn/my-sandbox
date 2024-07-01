import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

/**
 * A standard page header component that can be used in any page. It contains some textual
 * data and action buttons.
 *
 * `.text` is used to style the text content of the header.
 *
 * `.actions` is used to style the action buttons.
 *
 * @example
 * Simple example with a single element in `.text`
 *
 * ```jsx
 * function MyPage() {
 *   const { width } = useWindowSize();
 *
 *   let actions = <></>;
 *   if (width > breakpoints.md) {
 *     // Actions for desktop
 *     actions = (
 *       <>
 *         <SecondaryButton>Action 3</SecondaryButton>
 *         <SecondaryButton>Action 2</SecondaryButton>
 *       </>
 *     );
 *   } else {
 *     // Actions for mobile (opens a menu to select actions 2 and 3)
 *     actions = <SecondaryButton>More</SecondaryButton>;
 *   }
 *
 *   return (
 *     <StandardPageHeader>
 *       <h1 className="text">My Page</h1>
 *       // Can also be a composite of multiple elements like so:
 *       // <div className="text">
 *       //   <h1>Title</h1>
 *       //   <p>Subtitle</p>
 *       // </div>
 *       <div className="actions">
 *         {actions}
 *         <PrimaryButton>Action 1</PrimaryButton>
 *       </div>
 *     </StandardPageHeader>
 * );
 * ```
 */
export const StandardPageHeader = styled.div<{ breakpoint?: number }>`
  margin-bottom: 1.5rem;

  @media (min-width: ${({ breakpoint = breakpoints.lg }) => breakpoint}px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2.5rem;
  }

  .text {
    margin-bottom: 2rem;

    @media (min-width: ${({ breakpoint = breakpoints.lg }) => breakpoint}px) {
      margin-bottom: 0;
    }
  }

  h1 {
    font-size: var(--font-size-h2);
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    /* Aligns the action buttons to the text  */
    margin-top: 4px;

    @media (min-width: ${({ breakpoint = breakpoints.lg }) => breakpoint}px) {
      width: auto;
    }
  }

  .actions button {
    flex-grow: 1;
    width: 50%;

    @media (min-width: ${({ breakpoint = breakpoints.lg }) => breakpoint}px) {
      flex-grow: 0;
      width: auto;
    }
  }
`;
