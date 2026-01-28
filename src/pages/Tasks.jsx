import { useMemo, useState } from 'react';
import EmptyState from '../components/EmptyState.jsx';
import PageHeader from '../components/PageHeader.jsx';
import TaskForm from '../components/TaskForm.jsx';
import { useWorkspace } from '../context/WorkspaceContext.jsx';

export default function Tasks() {
  const { tasks, setTasks } = useWorkspace();
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const [priority, setPriority] = useState('All');
  const [sortBy, setSortBy] = useState('dueDate');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');

  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) => task.title.toLowerCase().includes(query.toLowerCase()) || task.project.toLowerCase().includes(query.toLowerCase()))
      .filter((task) => (status === 'All' ? true : task.status === status))
      .filter((task) => (priority === 'All' ? true : task.priority === priority))
      .sort((a, b) => String(a[sortBy]).localeCompare(String(b[sortBy])));
  }, [tasks, query, status, priority, sortBy]);
  const prioritySummary = ['High', 'Medium', 'Low'].map((level) => ({
    level,
    count: tasks.filter((task) => task.priority === level).length,
  }));

  function createTask(task) {
    setTasks((current) => [{ ...task, id: Date.now() }, ...current]);
  }

  function updateStatus(taskId, nextStatus) {
    setTasks((current) => current.map((task) => (task.id === taskId ? { ...task, status: nextStatus } : task)));
  }

  function startEditing(task) {
    setEditingTaskId(task.id);
    setEditingTitle(task.title);
  }

  function saveTaskTitle(taskId) {
    const title = editingTitle.trim();
    if (!title) return;
    setTasks((current) => current.map((task) => (task.id === taskId ? { ...task, title } : task)));
    setEditingTaskId(null);
    setEditingTitle('');
  }

  function deleteTask(taskId) {
    setTasks((current) => current.filter((task) => task.id !== taskId));
  }

  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Task workflow"
        title="Tasks"
        description="Create, filter, update, and review assigned project tasks."
      />

      <section className="panel">
        <div className="panel-header">
          <h2>Create Task</h2>
          <span>Sprint planning</span>
        </div>
        <TaskForm onCreate={createTask} />
      </section>

      <section className="priority-summary">
        {prioritySummary.map((item) => (
          <article key={item.level} className={`priority-summary-card ${item.level.toLowerCase()}`}>
            <strong>{item.count}</strong>
            <span>{item.level} priority</span>
          </article>
        ))}
      </section>

      <section className="panel">
        <div className="toolbar">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by task or project" />
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option>All</option>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <select value={priority} onChange={(event) => setPriority(event.target.value)}>
            <option>All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="dueDate">Due date</option>
            <option value="priority">Priority</option>
            <option value="status">Status</option>
          </select>
        </div>

        {filteredTasks.length ? (
          <div className="table-list">
            {filteredTasks.map((task) => (
              <article key={task.id} className="data-row">
                <div>
                  {editingTaskId === task.id ? (
                    <input
                      aria-label="Edit task title"
                      value={editingTitle}
                      onChange={(event) => setEditingTitle(event.target.value)}
                    />
                  ) : (
                    <strong>{task.title}</strong>
                  )}
                  <span>{task.project} · {task.assignee}</span>
                </div>
                <span className={`status-pill ${task.status.toLowerCase().replaceAll(' ', '-')}`}>{task.status}</span>
                <span className={`priority-pill ${task.priority.toLowerCase()}`}>{task.priority}</span>
                <span>{task.dueDate}</span>
                <select value={task.status} onChange={(event) => updateStatus(task.id, event.target.value)}>
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
                {editingTaskId === task.id ? (
                  <button className="text-button" onClick={() => saveTaskTitle(task.id)}>Save</button>
                ) : (
                  <button className="text-button" onClick={() => startEditing(task)}>Edit</button>
                )}
                <button className="text-button danger" onClick={() => deleteTask(task.id)}>Delete</button>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState title="No tasks found" message="Try changing the search or filter options." />
        )}
      </section>
    </div>
  );
}
