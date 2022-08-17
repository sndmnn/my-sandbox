import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/TodoList';
import ThemeProvider from './contexts/ThemeContext';
import './styles.css';

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider>
        <TodoList></TodoList>
        <TodoList></TodoList>
      </ThemeProvider>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);
root.render(React.createElement(App));
