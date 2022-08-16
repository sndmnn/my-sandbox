import React, { useCallback, useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ToDo from '../models/ToDo';
import ToDoListItem from './ToDo';

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const { theme, setTheme } = useContext(ThemeContext);

  const fetchTodos = useCallback(async () => {
    const response = await fetch('http://localhost:3333/todos', {
      method: 'GET',
    });

    const jsonResponse = (await response.json()) as ToDo[];

    setTodos(jsonResponse);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <>
      <div className="themes">
        <button onClick={() => setTheme('light')}>Tema Claro</button>
        <button onClick={() => setTheme('dark')}>Tema Escuro</button>
      </div>
      <ul className={`todo-list todo-list-${theme}`}>
        {todos.map((todo) => (
          <ToDoListItem key={todo.id} todo={todo} updateTodos={fetchTodos} />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
