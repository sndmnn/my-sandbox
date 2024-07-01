import React, { useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBarContainer, SearchInput } from './SearchBar.styles';

interface ComponentProps {
  /**
   * Callback function to be called when a search is triggered (by clicking the search button, pressing enter or typing more than `minCharacters`)
   *
   * @param search trimmed search string
   * @returns
   */
  onSearch: (search: string) => void;

  /**
   * Callback function to be called when the search input is cleared
   */
  onClear?: () => void;

  /**
   * Minimum number of characters to trigger a search. If `null`, search will
   * never be triggered on input change.
   *
   * Default: 5
   */
  minCharacters?: number | null;

  className?: string;
}

export default function SearchBar({
  onSearch,
  onClear = () => {},
  className,
  minCharacters = 5,
}: ComponentProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = () => {
    const searchString = searchInputRef.current?.value.trim();

    if (!searchString) {
      onClear();
      return;
    }

    if (minCharacters !== null && searchString.length > minCharacters)
      onSearch(searchString);
  };

  const handleInputKeyDown = (event: { key: string }) => {
    const searchString = searchInputRef.current?.value.trim();

    if (!searchString) return;

    if (event.key === 'Enter') onSearch(searchString);
  };

  return (
    <SearchBarContainer className={className}>
      <SearchIcon />
      <SearchInput
        ref={searchInputRef}
        onChange={handleSearchChange}
        onKeyDown={handleInputKeyDown}
        aria-label="Search bar"
      />
    </SearchBarContainer>
  );
}
