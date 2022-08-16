import React from 'react';
import useTheme from '../hooks/useTheme';
import ToDo from '../models/ToDo';

interface ComponentProps {
  todo: ToDo;
  updateTodos: () => void;
}

const ToDo: React.FC<ComponentProps> = ({ todo, updateTodos }) => {
  const { theme } = useTheme();

  const handleTodoCompletionToggle = () => {
    (async () => {
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
    })();
  };

  const completedTodoStyle = {
    color: theme === 'light' ? 'darkgreen' : 'lightgreen',
    textDecorationLine: 'line-through',
  };

  return (
    <button
      type="button"
      className="todo"
      onClick={handleTodoCompletionToggle}
      style={todo.completed ? completedTodoStyle : {}}
    >
      <li>{todo.title}</li>
    </button>
  );
};

export default ToDo;
