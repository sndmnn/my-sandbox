- React only re-renders a component once it detects change on that component. If, for instance, the `value` of an `<input />`  is constant between render cycles, the component will not re-render, resulting in a UI that doesn’t change;

- The implicit contract of a React function component it that it must return a product of `React.createElement`;

- It is also important to note that React re-renders the component A LOT, so these function components must run fast. In functional terms: they must be pure (not have side effects);

- The reasons to use `useEffect` are (mainly):
    1. It allows logic to be ran separately from a component render. React wants to render things as fast as possible (especially in the first render) so that the user sees something in the screen; if you define logic inside a function component, outside a `useEffect` hook, JS runtime will execute all of that code before a component structure (JSX or `React.createElement` calls) is returned from that function (basically you’ll delay React’s render of the component, increasing the time before something is displayed on the screen);
    
    2. You allow react to track state through the dependencies array, re-running the logic contained inside `useEffect` every time that state changes.

- Prefer uncontrolled forms over controlled forms whenever possible (avoiding the use of state and letting the form handle data (pulling data from the submit event));

- Anything that goes in between curly braces in JSX (`<div>{…}</div>`) has to be an expression (by the JavaScript definition of an expression - anything that can go on the right side of an assignment operator);

- There is a hooks called `[useDebugValue](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)` that can be used with React Dev Tools to inspect values inside custom hooks in real time;

- It’s possible to have two providers of the same context in an application. Using nested contexts would result in the closest value to the element that is consuming a context being used;

- The value of a context will be kept as long its Provider Component (`Context.Provider`) is mounted.