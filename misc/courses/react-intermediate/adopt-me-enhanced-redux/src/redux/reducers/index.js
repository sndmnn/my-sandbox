import { combineReducers } from 'redux';
import location from './location';
import breed from './breed';
import animal from './animal';
import theme from './theme';

/* `combineReducers` is a utility function that combines all the reducers
 * into a single reducer. It's useful to avoid writing a parent reducer that
 * delegates to the child reducers (that would cause code to be way harder to
 * follow).
 *
 * Combined reducers are probably called in order with every action, but your
 * code should not rely on that, as reducers are pure functions and should not
 * have any side effects.
 */
export default combineReducers({
  location,
  breed,
  animal,
  theme,
});
