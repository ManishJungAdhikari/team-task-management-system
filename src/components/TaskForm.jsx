import { useState } from 'react';

const defaultTask = {
  title: '',
  project: 'Sales Pipeline Tracker',
  assignee: 'Demo User',
  status: 'To Do',
  priority: 'Medium',
  dueDate: '2026-03-10',
};

export default function TaskForm({ onCreate }) {
  const [task, setTask] = useState(defaultTask);

  function updateField(field, value) {
    setTask((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!task.title.trim()) return;
    onCreate(task);
    setTask(defaultTask);
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label>
        Task title
        <input value={task.title} onChange={(event) => updateField('title', event.target.value)} placeholder="Add a new task" />
      </label>
      <label>
        Project
        <select value={task.project} onChange={(event) => updateField('project', event.target.value)}>
          <option>Client Service Portal</option>
          <option>Sales Pipeline Tracker</option>
          <option>Inventory Request Board</option>
        </select>
      </label>
      <label>
        Status
        <select value={task.status} onChange={(event) => updateField('status', event.target.value)}>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </label>
      <label>
        Priority
        <select value={task.priority} onChange={(event) => updateField('priority', event.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </label>
      <label>
        Due date
        <input value={task.dueDate} type="date" onChange={(event) => updateField('dueDate', event.target.value)} />
      </label>
      <button className="primary-button" type="submit">Create Task</button>
    </form>
  );
}
