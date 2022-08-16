import React from 'react';
import Counter from './components/Counter';
import Clock from './components/Clock';
import ToDoList from './components/ToDoList';
import ThemeProvider from './contexts/ThemeContext';

// const App: React.FC = () => {
//   // Componentes funcionais devem retornar o resultado de
//   // React.createElement.
//   return React.createElement('h1', {}, 'Meu app');
// };

const App: React.FC = () => (
  <ThemeProvider>
    <ToDoList />
  </ThemeProvider>
);

export default App;
