# Hooks

- React relies on the order which hooks are called to work properly. You should not place hooks inside loops, conditional statements or nested functions, because that would alter the order in which hook are called;

- To ensure that all stateful logic in a component is clearly visible from its source code, you should only call hooks inside function components or custom hooks.

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

- Returns a mutable ref object that will persist for the full lifetime of the component;

- In every re-render, React will deliver the exact same object on the `useRef` call;

- Mutating the `.current` property doesn’t cause a re-render. If some code needs to be ran when React attaches or detaches a ref to a DOM node, a [callback ref](https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node) may be used instead.

## `useReducer`
---

- Reducer functions should always return a new object with the new state, otherwise React will not be able to tell that the state was changed (as it uses the `Object.is` algorithm). In other terms, React will bail out of dispatch without rendering the children or firing effects;

- Reducers are favored against `useState` when you have complex state logic, or components that trigger deep updates;

- They can be used to "make state testable". That is because reducers are pure (they have no side effects) so for every action that is given the same state, you should be able to determine the new state;

- React guarantees that `dispatch` functions indentities' are stable and won't change on re-renders, making it safe to omit them from dependency arrays;

- It is possible to create the initial state lazily by passing an `init` function as third argument for the hook. This function can be called in response to an action, making it useful to reset state;

- Depending on the complexity of a state and on the use cases of an application, an alternative to state management such as XState might be a more viable solution.

## `useMemo`
---

- Due to the nature of React, your component may rerender several times during your application lifecycle. This hook is used to avoid making expensive calculations on every render.

- It'll only run the callback function that is passed to it if an item from the dependency array changed since last render;

- Note that `useMemo` does not trigger side effects, it is used only as a performance optimization tool, preserving values that are computationally expensive to acquire between renders.

## `useCallback`
---

- `useCallback` is a specific use-case for `useMemo` hooks and in fact, they're implemented using the same mechanism;

- This hook is used to memoize functions (not the return value of a function, but the function itself). Functions are first-class citzens have referential equality, just like objects;

- If a function is declared in the scope of a function component and then passed as a prop to an optimized component (a `memo`), it'll cause the child component to rerender every time the parent rerenders. That is due to the fact that a new (referentially different) function will be declared on every render of the parent component:

```(javascript)
// React will reuse the same component unless `foo` changes
const Child = memo(({ foo }) => (
    <h1>{foo()}</h1>
));

function Parent() {
    // `foo` is (referentially) different on every render
    const foo = function() {}

    // `foo` always changes and therefore will cause `Child` to be rerendered
    return <Child foo={foo} />
}
```
