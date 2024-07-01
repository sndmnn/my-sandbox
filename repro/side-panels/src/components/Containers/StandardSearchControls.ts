import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

/**
 * A standard search controls component that can be used in any page. It contains a search bar
 * as well as a sort and a filter button.
 *
 * `.search-bar` is used to style the search bar.
 *
 * `.buttons` is used to style the sort and filter buttons.
 *
 * @example
 * ```jsx
 * function MyPage() {
 *   return (
 *     <StandardSearchControls>
 *       <SearchBar className="search-bar" onSearch={() => {}} />
 *       <div className="buttons">
 *         <TertiaryButton>Filter</TertiaryButton>
 *         <TertiaryButton>Sort</TertiaryButton>
 *       </div>
 *     </StandardSearchControls>
 *   );
 * }
 * ```
 */
export const StandardSearchControls = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media screen and (min-width: ${breakpoints.md}px) {
    flex-direction: row;
  }

  .search-bar {
    @media screen and (min-width: ${breakpoints.md}px) {
      max-width: 448px;
      margin-right: 1rem;
    }
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;

    @media screen and (min-width: ${breakpoints.md}px) {
      margin-top: 0;
    }
  }

  .buttons button {
    width: 50%;

    @media screen and (min-width: ${breakpoints.md}px) {
      width: auto;
    }
  }
`;
