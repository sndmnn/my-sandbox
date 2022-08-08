# Hooks

## `useState`
---

- By the React documentation `useState` is "a way to "preserve" some values between the function calls";

- It's important to pass an `initialValue` that is either already computed or cheap to compute;

- If the initial value of a state is the result of an expensive computation it's possible to pass a function instead of a value. This function will only be executed in the initial rendering;

- If new state is computed using the previous state, it's possible to pass a function to `setState`, which will receive the previous state as an argument and should return the new state;

- If a State Hook is updated to the same value as the current state, React will bail out without rendering the children or firing effects (it may still render that specif component - *without their children* - before bailing out);

- React may group several state updates into a single re-render so a state update should not count on another. If a synchronous update is needed `flushSync()` should be used (it really hurts performance and should only be used where absolutely needed).

## `useEffect`
---

- React does not allow side effects to be put inside the main body of a function component (known as React's _render phase_) because doing so may result in bugs and inconsistencies in the UI. The `useEffect` hook is, as referred by the documentation, an escape hatch from React's functional approach to the imperative world, allowing you to write imperative, possibly effectful code inside a function component;

- `useEffect` can be thought of as a way to contain side effects;

- A function passed as first argument to the Effect Hook can return another function (called _clean-up function_) that is ran before the component is removed from the UI. Most of the time a clean-up function is used to prevent memory leaks;

- If a component is rendered multiple times, the previous effect is cleaned up before the next effect runs;

- By default, effects will run after every completed render (after the initial render and every time a component re-renders for any reason), but you can fire them only when certain values change by using a dependency array (the second argument to `useEffect`);

- If an empty array is passed as second argument, the effect will only run once (on mount) and it's clean-up function on unmount

- If the effect is dependant on anything whatsoever, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect;

- As said, effects are deferred to run *after* every completed render, but in some cases (DOM mutation for example) it's not suitable that the effect runs after the browser paints. For these cases [`useLayoutEffect`](https://reactjs.org/docs/hooks-reference.html#uselayouteffect) is more suitable.

## `useContext`
---

- The Context Hook is a way to consume a context inside a function component. It accepts a context object (a result from `React.createContext`) and returns that context's value;

- When the nearest context provider (`<Context.Provider>`) above the component updates, this hook will trigger a re-render with the latest context value;

- A component calling useContext will always re-render when the context value changes. If re-rendering the component is expensive, it's possible to optimize it by [using memoization](https://github.com/facebook/react/issues/15156#issuecomment-474590693).

## `useRef`
---

- Mutating the `.current` property doesn’t cause a re-render. If some code needs to be ran when React attaches or detaches a ref to a DOM node, a [callback ref](https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node) may be used instead.
