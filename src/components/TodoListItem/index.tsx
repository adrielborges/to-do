import React from 'react';

import './styles.css';

interface TodoListItemProps {
  todo: Todo
  toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li >
      <label className={todo.done ? "complete" : undefined}>
        <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </li>
  );
}
