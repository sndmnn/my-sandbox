import React from 'react';
import useSearchControls from '../../hooks/useSearchControls';
import ToDo from '../../models/ToDo';
import { SortContainer } from './SortToDos.styles';
import { byId, byTitle } from '../../utils/toDosOrderFunctions';
import { ArrowDownIcon, ArrowUpIcon } from '../../icons';

interface ComponentProps {
  updateSort: ReturnType<typeof useSearchControls<ToDo>>['updateSort'];
  sort: ReturnType<typeof useSearchControls<ToDo>>['sort'];
}

export default function SortStockRequests({
  updateSort,
  sort,
}: ComponentProps) {
  function handleSortByTitle() {
    updateSort({
      by: 'title',
      order:
        sort.by === 'title' ? (sort.order === 'asc' ? 'desc' : 'asc') : 'asc',
      sortFn: byTitle,
    });
  }

  function handleSortById() {
    updateSort({
      by: 'id',
      order: sort.by === 'id' ? (sort.order === 'asc' ? 'desc' : 'asc') : 'asc',
      sortFn: byId,
    });
  }

  return (
    <SortContainer>
      <button className="sort-button" onClick={handleSortByTitle}>
        <span>Title</span>
        {sort.by === 'title' && sort.order === 'asc' && (
          <ArrowUpIcon className="order" />
        )}
        {sort.by === 'title' && sort.order === 'desc' && (
          <ArrowDownIcon className="order" />
        )}
      </button>
      <button className="sort-button" onClick={handleSortById}>
        <span>ID</span>
        {sort.by === 'id' && sort.order === 'asc' && (
          <ArrowUpIcon className="order" />
        )}
        {sort.by === 'id' && sort.order === 'desc' && (
          <ArrowDownIcon className="order" />
        )}
      </button>
    </SortContainer>
  );
}
