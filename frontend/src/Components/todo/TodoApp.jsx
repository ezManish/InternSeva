import React, { useState } from "react";
import "./TodoApp.css";

const TodoApp = ({ todos, setTodos, onClose }) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (index) =>
    setTodos(todos.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t)));

  const deleteTask = (index) =>
    setTodos(todos.filter((_, i) => i !== index));

  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <div className="todo-header" style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>To-Do List</h2>
          <button className="close-btn" onClick={onClose}>❌</button>
        </div>

        <div className="input-section">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a task"
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? "completed" : ""}>
              <span onClick={() => toggleComplete(index)}>{todo.text}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
