import React, { useState } from 'react';
import './TaskTracker.css';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: input.trim(), completed: false },
      ]);
      setInput('');
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const sortedTasks = [
    ...tasks.filter((t) => !t.completed),
    ...tasks.filter((t) => t.completed),
  ];

  return (
    <div className="task-container">
      <h2>Task Tracker</h2>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Start writing and press enter to create task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={addTask}
        />
        <button className="enter-btn">↩</button>
      </div>
      <ul className="task-list">
        {sortedTasks.map((task) => (
          <li key={task.id} className="task-item">
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.completed ? 'done' : ''}>{task.text}</span>
            </label>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskTracker;
