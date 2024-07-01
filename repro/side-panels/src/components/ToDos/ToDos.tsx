import React from 'react';
import useSearchControls from '../../hooks/useSearchControls';
import useSidePanels from '../../hooks/useSidePanels';
import ToDo from '../../models/ToDo';
import ToDosAPI from '../../api/ToDosAPI';
import { byId } from '../../utils/toDosOrderFunctions';
import SortToDos from './SortToDos';
import { StandardSearchControls } from '../Containers/StandardSearchControls';
import SearchBar from '../SearchBar/SearchBar';
import { TertiaryButton } from '../Buttons/TertiaryButton';
import { SortIcon } from '../../icons';
import { PageContent, ToDosList } from './ToDos.styles';
import { SidePanelStack } from '../SidePanel/SidePanelStack';

export default function ToDos() {
  const [todos, setTodos] = React.useState<ToDo[]>([]);

  const sidePanels = useSidePanels();

  const searchControls = useSearchControls<ToDo>(
    todos,
    {
      search: {
        term: '',
        filterFn: (item, searchTerm) => {
          return item.title
            .toLowerCase()
            .includes((searchTerm as string).toLowerCase());
        },
      },
    },
    {
      by: 'id',
      order: 'asc',
      sortFn: (data, order) => byId(data, order),
    },
  );

  React.useEffect(() => {
    const newToDos = ToDosAPI.getToDos();
    setTodos(newToDos);

    searchControls.updateData(newToDos);
  }, []);

  function handleSearch(searchTerm: string) {
    searchControls.setFilters({ search: { term: searchTerm } });
  }

  function handleClear() {
    searchControls.setFilters({ search: { term: '' } });
  }

  function handleSort() {
    sidePanels.pushPanel(
      <SortToDos
        updateSort={searchControls.updateSort}
        sort={searchControls.sort}
      />,
      'Sort',
    );
  }

  return (
    <>
      <PageContent>
        <StandardSearchControls>
          <SearchBar
            className="search-bar"
            minCharacters={0}
            onSearch={handleSearch}
            onClear={handleClear}
          />

          <div className="buttons">
            <TertiaryButton onClick={handleSort}>
              <SortIcon />
              <span>Sort</span>
            </TertiaryButton>
          </div>
        </StandardSearchControls>

        <ToDosList>
          {searchControls.data.map((todo) => (
            <li key={todo.id}>
              <p>{todo.title}</p>
            </li>
          ))}
        </ToDosList>
      </PageContent>
      {sidePanels.panels.length > 0 && (
        <SidePanelStack>{sidePanels.panels.at(-1)}</SidePanelStack>
      )}
    </>
  );
}
