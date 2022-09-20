import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  // Enable the Redux DevTools extension if the we're in the browser
  typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
