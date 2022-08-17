import React from 'react';
import useTheme from '../hooks/useTheme';
import ToDoModel from '../models/Todo';

interface ComponentProps {
  todo: ToDoModel;
  updateTodos: () => void;
}

const ToDo: React.FC<ComponentProps> = ({ todo, updateTodos }) => {
  const { theme } = useTheme();

  const toggleTodo = async () => {
    await fetch(`http://localhost:3333/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: !todo.completed,
      }),
    });

    updateTodos();
  };

  const completedTodoStyle = {
    color: theme === 'light' ? 'darkgreen' : 'red',
    textDecorationLine: 'line-through',
  };

  return (
    <button
      type="button"
      className="todo"
      onClick={toggleTodo}
      style={todo.completed ? completedTodoStyle : {}}
    >
      <li>{todo.title}</li>
    </button>
  );
};

export default ToDo;
