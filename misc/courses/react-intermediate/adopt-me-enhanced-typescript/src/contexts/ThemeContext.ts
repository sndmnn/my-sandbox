import { createContext } from 'react';

const ThemeContext = createContext<{
  color: string;
  setColor: (color: string) => void;
}>({
  color: 'green',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setColor: (color: string) => {},
});

export default ThemeContext;
