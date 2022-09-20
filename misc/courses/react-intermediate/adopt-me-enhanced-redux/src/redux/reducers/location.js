/* Reducers always have to return state, always need to have a default state
 * and always have to accept an action. This is sort of the contract for a
 * function to be a valid reducer, just like a function needs to return
 * `React.ReactNode` to be a valid React component.
 *
 * Reducers also should be pure functions, which means that they don't have side
 * effects. That makes them testable and easier to reason about.
 */
export default function location(state = 'Seattle, WA', action) {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return action.payload;
    /* Every reducer is called with every action even if it doesn't care about
     * it. It's important to return the previous state to cover cases where this
     * reducer isn't concerned about the action that was dispatched.
     *
     * If you return the same state that was passed in, Redux will not tell React
     * to re-render the components that subscribed this reducer's changes.
     */
    default:
      return state;
  }
}
