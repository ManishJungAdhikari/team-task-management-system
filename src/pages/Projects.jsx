import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { useWorkspace } from '../context/WorkspaceContext.jsx';

export default function Projects() {
  const { projects, tasks } = useWorkspace();
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const visibleProjects = useMemo(
    () =>
      projects
        .filter((project) => project.name.toLowerCase().includes(query.toLowerCase()) || project.client.toLowerCase().includes(query.toLowerCase()))
        .filter((project) => (status === 'All' ? true : project.status === status)),
    [projects, query, status]
  );

  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Project delivery"
        title="Projects"
        description="Monitor project progress, deadlines, and related team tasks."
      />

      <section className="panel compact-panel">
        <div className="toolbar">
          <input aria-label="Search projects" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects or clients" />
          <select aria-label="Filter projects by status" value={status} onChange={(event) => setStatus(event.target.value)}>
            <option>All</option>
            <option>Planning</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
      </section>

      <section className="project-grid">
        {visibleProjects.map((project) => {
          const projectTasks = tasks.filter((task) => task.project === project.name);
          const completed = projectTasks.filter((task) => task.status === 'Completed').length;
          const risk = project.progress >= 70 ? 'On Track' : project.progress >= 50 ? 'Needs Review' : 'At Risk';
          return (
            <article key={project.id} className="project-card">
              <div className="panel-header">
                <div>
                  <h2>{project.name}</h2>
                  <span>{project.client}</span>
                </div>
                <span className={`status-pill ${project.status.toLowerCase().replaceAll(' ', '-')}`}>{project.status}</span>
              </div>
              <div className="progress-track">
                <span style={{ width: `${project.progress}%` }} />
              </div>
              <div className="project-meta">
                <span>{project.progress}% complete</span>
                <span>Due {project.deadline}</span>
                <span>{projectTasks.length} tasks</span>
              </div>
              <div className="project-health">
                <strong>{risk}</strong>
                <span>{completed} completed tasks</span>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
