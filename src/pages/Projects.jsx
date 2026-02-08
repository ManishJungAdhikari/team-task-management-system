import PageHeader from '../components/PageHeader.jsx';
import { useWorkspace } from '../context/WorkspaceContext.jsx';

export default function Projects() {
  const { projects, tasks } = useWorkspace();

  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Project delivery"
        title="Projects"
        description="Monitor project progress, deadlines, and related team tasks."
      />

      <section className="project-grid">
        {projects.map((project) => {
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
