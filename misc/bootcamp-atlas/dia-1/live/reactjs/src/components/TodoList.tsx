import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Todo from '../models/Todo';
import TodoListItem from './Todo';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { theme, setTheme } = useContext(ThemeContext);

  async function fetchTodos() {
    const response = await fetch('http://localhost:3333/todos');
    const responseJson = await response.json();
    setTodos(responseJson);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <div className="themes">
        <button onClick={() => setTheme('light')}>Tema Claro</button>
        <button onClick={() => setTheme('dark')}>Tema Escuro</button>
      </div>
      <ul className={`todo-list todo-list-${theme}`}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            updateTodos={fetchTodos}
          ></TodoListItem>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
