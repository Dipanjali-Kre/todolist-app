import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        aria-label={`Mark ${todo.text} as complete`}
      />
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} aria-label={`Delete ${todo.text}`}>Delete</button>
    </li>
  );
}

export default TodoItem;
