To avoid cloning the project, you can download this folder using a tool like [GitZip](https://kinolien.github.io/gitzip/). Paste the URL to this folder (https://github.com/sndmnn/my-sandbox/tree/main/repro/side-panels) and click the "Download" button.

To start the project, run `npm run start` in the root directory.

# The Problem

## A Quick Glance

Side panels don't seem to be re-rendering when state changes. You can see that the list is being updated in the background, but the icons in the side panel are only updated after closing and reopening the panel.

https://github.com/sndmnn/my-sandbox/assets/50667385/8a03fb9b-cb82-4fa7-929a-679b315723d2

## The Details

I have a hook [`useSidePanels`](https://github.com/sndmnn/my-sandbox/blob/main/repro/side-panels/src/hooks/useSidePanels.tsx) that encapsulates the logic for managing side panels. It's responsible for keeping track of a "side panel stack" as I call it, which is an array of objects that represent the panels that are currently open. This array is tracked by React via `useState` and every item in the array is a `JSX.Element` that represents the panel.

Panels are added to the stack by calling the function `pushPanel` returned by the hook. This function takes a title for the panel as well as a `JSX.Element` representing the contents of the panel and wraps it in a "panel container" with a navigation bar at the top, which has its controls adjusted based on the number of panels in the stack (e.g. the back button is hidden if there's only one panel). This "panel container" is a styled component called [`SidePanelContainer`](https://github.com/sndmnn/my-sandbox/blob/main/repro/side-panels/src/components/SidePanel/SidePanel.styles.ts) responsible for adjusting the panel's dimensions and positioning on the screen (on small screens the panel is fixed at the bottom of the screen, on larger screens it's fixed at the right side of the screen).

```tsx
function useSidePanels() {
  const [panels, setPanels] = React.useState<JSX.Element[]>([]);

  // ...

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

  // ...

  return {
    panels,
    pushPanel,
    // ...
  };
}
```

As you can see this hook also returns the "panel stack" as a `JSX.Element` array that can be rendered in the parent component. This array is intended to be rendered in the parent component wrapped in a styled component called [`SidePanelStack`](https://github.com/sndmnn/my-sandbox/blob/main/repro/side-panels/src/components/SidePanel/SidePanelStack.ts), like so:

```tsx
function MyComponent() {
  const sidePanels = useSidePanels();

  React.useEffect(() => {
    sidePanels.pushPanel(<MyPanelContent />);
  }, []);

  return (
    <>
      {sidePanels.panels.length > 0 && (
        <SidePanelStack>{sidePanels.panels.at(-1)}</SidePanelStack>
      )}
    </>
  );
}
```

My problem is that whenever `MyPanelContent`, however it may be called, receives props that change state, the side panel doesn't re-render.

Below is the code for the example in the video. I won't go into details about the [`useSearchControls`](https://github.com/sndmnn/my-sandbox/blob/main/repro/side-panels/src/hooks/useSearchControls.ts) hook, but what's relevant to this problem is that it returns an object with a property `sort` that contains information about the current sort state (e.g. by which property the data is sorted and in which order, which may be 'asc' or 'desc') and a function `updateSort` that can be called to update the sort state.

```tsx
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
   *
   * `byId` is a helper function that sorts the data by id, in the specified order
   * (which is dictated by the sort configuration inside the useSearchControls hook).
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
       * (which will trigger an update to searchControls.sort) and it will use `searchControls.sort`
       * to display the current sort configuration.
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
```

I would expect that when the sort configuration is updated, the `SortToDos` component would re-render and display the new sort configuration. However, this is not the case. The `ToDosList` is updated, and elements are sorted correctly, but the side panel doesn't re-render.

I know that `useSearchControls` is working correctly because if I place `SortToDos` directly in the parent component instead of pushing it as a panel, it re-renders correctly.

https://github.com/sndmnn/my-sandbox/assets/50667385/4b1d92fb-749e-46da-a9f1-9658bec058dc

Code for the example in the video:

```tsx
export default function ToDos() {
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

  const searchControls = useSearchControls<ToDo>(
    todos,
    {},
    {
      by: 'id',
      order: 'asc',
      sortFn: (data, order) => byId(data, order),
    },
  );

  return (
    <PageContent>
      <SortToDos
        updateSort={searchControls.updateSort}
        sort={searchControls.sort}
      />

      <br />

      <ToDosList>
        {searchControls.data.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
          </li>
        ))}
      </ToDosList>
    </PageContent>
  );
}
```


This is strange to me because I would think that after `searchControls.updateSort` is called, `ToDos` would re-render since there's a state update inside of it (`searchControls.updateSort` calls a "setState" function, "setState" meaning `React.useState()[1]`). And the resulting component tree would look pretty much the same as above.

```tsx
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

  {sidePanels.panels.length > 0 && (
    <SidePanelStack>
      <SortToDos
        updateSort={searchControls.updateSort}
        sort={searchControls.sort}
      />
    </SidePanelStack>
  )}
</>
```

I'm strugging to understand exactly what's happening so I can fix my solution for side panels. I would appreciate any help or guidance you can provide. Thank you!
