import React from 'react';
import './todo_btn.css';

const Todo_btn = ({ onOpen }) => {
  return (
    <button
      type="button"
      className="todo-icon todo-icon-btn"
      onClick={onOpen}
      aria-label="Open To-Do"
    >
      <img src="src\assets\To_do_SVG.svg" alt="todo" className="todo-icon-img" />
    </button>
  );
};

export default Todo_btn;
