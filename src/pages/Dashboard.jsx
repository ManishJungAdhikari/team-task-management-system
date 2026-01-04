import StatCard from '../components/StatCard.jsx';
import { useWorkspace } from '../context/WorkspaceContext.jsx';

export default function Dashboard() {
  const { tasks, projects } = useWorkspace();
  const completedTasks = tasks.filter((task) => task.status === 'Completed').length;
  const inProgressTasks = tasks.filter((task) => task.status === 'In Progress').length;
  const averageProgress = Math.round(projects.reduce((sum, project) => sum + project.progress, 0) / projects.length);

  return (
    <div className="page-stack">
      <div className="page-heading">
        <div>
          <span className="eyebrow">Workspace overview</span>
          <h1>Dashboard</h1>
        </div>
        <p>Track project progress, task status, and team activity in one workspace.</p>
      </div>

      <section className="stats-grid">
        <StatCard label="Total Tasks" value={tasks.length} hint="Across active projects" />
        <StatCard label="Completed" value={completedTasks} hint="Finished this sprint" tone="green" />
        <StatCard label="In Progress" value={inProgressTasks} hint="Currently assigned" tone="orange" />
        <StatCard label="Project Progress" value={`${averageProgress}%`} hint="Average completion" tone="purple" />
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="panel-header">
            <h2>Recent Tasks</h2>
            <span>{tasks.length} items</span>
          </div>
          <div className="task-list compact">
            {tasks.map((task) => (
              <div key={task.id} className="task-row">
                <div>
                  <strong>{task.title}</strong>
                  <span>{task.project}</span>
                </div>
                <span className={`status-pill ${task.status.toLowerCase().replaceAll(' ', '-')}`}>{task.status}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <h2>Project Progress</h2>
            <span>{projects.length} active</span>
          </div>
          <div className="project-progress-list">
            {projects.map((project) => (
              <div key={project.id} className="progress-item">
                <div>
                  <strong>{project.name}</strong>
                  <span>{project.deadline}</span>
                </div>
                <div className="progress-track">
                  <span style={{ width: `${project.progress}%` }} />
                </div>
                <small>{project.progress}%</small>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
