import { LogOut, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useWorkspace } from '../context/WorkspaceContext.jsx';

export default function Topbar() {
  const { user, logout } = useAuth();
  const { tasks, projects, teamMembers } = useWorkspace();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();
    if (!searchTerm) return [];

    const taskResults = tasks
      .filter((task) => `${task.title} ${task.project} ${task.status}`.toLowerCase().includes(searchTerm))
      .map((task) => ({ id: `task-${task.id}`, label: task.title, detail: task.project, type: 'Task', to: '/tasks' }));

    const projectResults = projects
      .filter((project) => `${project.name} ${project.client} ${project.status}`.toLowerCase().includes(searchTerm))
      .map((project) => ({ id: `project-${project.id}`, label: project.name, detail: project.client, type: 'Project', to: '/projects' }));

    const memberResults = teamMembers
      .filter((member) => `${member.name} ${member.role} ${member.status}`.toLowerCase().includes(searchTerm))
      .map((member) => ({ id: `member-${member.id}`, label: member.name, detail: member.role, type: 'Member', to: '/team' }));

    return [...taskResults, ...projectResults, ...memberResults].slice(0, 6);
  }, [query, tasks, projects, teamMembers]);

  return (
    <header className="topbar">
      <div className="search-area">
        <div className="search-box">
          <Search size={18} />
          <input
            aria-label="Search workspace"
            placeholder="Search tasks, projects, members..."
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        {query.trim() ? (
          <div className="search-results">
            {results.length ? (
              results.map((result) => (
                <Link key={result.id} to={result.to} onClick={() => setQuery('')}>
                  <span>{result.type}</span>
                  <strong>{result.label}</strong>
                  <small>{result.detail}</small>
                </Link>
              ))
            ) : (
              <p>No matching tasks, projects, or members.</p>
            )}
          </div>
        ) : null}
      </div>
      <div className="profile-chip">
        <div>
          <strong>{user?.name}</strong>
          <span>{user?.role}</span>
        </div>
        <button className="icon-button" onClick={logout} aria-label="Log out">
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
}
