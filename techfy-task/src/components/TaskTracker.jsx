import React, { useState } from 'react';
import './TaskTracker.css';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');


  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (e, id) => {
    if (e.key === 'Enter' && editText.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: editText.trim() } : task
        )
      );
      setEditingId(null);
      setEditText('');
    }
  };


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
               {editingId === task.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => saveEdit(e, task.id)}
                className="edit-input"
                autoFocus
              />
            ) : (
              <span className={task.completed ? 'done' : ''}>{task.text}</span>
            )}
            </label>
              <div>
                <button
                  className="edit-btn"
                  onClick={() => startEditing(task)}
                  disabled={editingId === task.id}
                >
                ✏️
              </button>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskTracker;
