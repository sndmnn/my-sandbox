import React, { createContext, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext({} as ThemeContextState);

interface ComponentProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ComponentProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
