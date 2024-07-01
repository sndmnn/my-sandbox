import React from 'react';
import useSearchControls from '../../hooks/useSearchControls';
import useSidePanels from '../../hooks/useSidePanels';
import ToDo from '../../models/ToDo';
import { byId } from '../../utils/toDosOrderFunctions';
import SortToDos from './SortToDos';
import { TertiaryButton } from '../Buttons/TertiaryButton';
import { SortIcon } from '../../icons';
import { PageContent, ToDosList } from './ToDos.styles';
import { SidePanelStack } from '../SidePanel/SidePanelStack';

export default function ToDos() {
  // This data would normally come from an API, but for the sake of simplicity
  // we're just using a static array.
  const [todos, setTodos] = React.useState<ToDo[]>([
    {
      id: 1,
      title: 'Buy groceries',
      completed: false,
    },
    {
      id: 2,
      title: 'Walk the dog',
      completed: true,
    },
    {
      id: 3,
      title: 'Do laundry',
      completed: false,
    },
  ]);

  const sidePanels = useSidePanels();

  /* I'm using the useSearchControls hook to manage the sort. It's initialized with
   * the data, the filter configuration and the sort configuration.
   *
   * I'm not using the filter functionality in this example to keep it simple. And
   * the initial sort configuration is by id, ascending.
   */
  const searchControls = useSearchControls<ToDo>(
    todos,
    {},
    {
      by: 'id',
      order: 'asc',
      sortFn: (data, order) => byId(data, order),
    },
  );

  function handleSort() {
    sidePanels.pushPanel(
      /* SortToDos will manipulate the sort configuration by calling `searchControls.updateSort`
       * and it will use `searchControls.sort` to display the current sort configuration.
       */
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
        <TertiaryButton onClick={handleSort}>
          <SortIcon />
          <span>Sort</span>
        </TertiaryButton>

        <br />

        <ToDosList>
          {searchControls.data.map((todo) => (
            <li key={todo.id}>
              <p>{todo.title}</p>
            </li>
          ))}
        </ToDosList>
      </PageContent>

      {/* SortToDos will be displayed here once the `SortButton` is clicked */}
      {sidePanels.panels.length > 0 && (
        <SidePanelStack>{sidePanels.panels.at(-1)}</SidePanelStack>
      )}
    </>
  );
}
