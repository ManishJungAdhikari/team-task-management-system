import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { initialProjects, initialTasks, teamMembers } from '../data/mockData.js';
import { fetchWorkspaceSummary } from '../services/workspaceApi.js';

const WorkspaceContext = createContext(null);

export function WorkspaceProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [projects, setProjects] = useState(initialProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    fetchWorkspaceSummary()
      .then((summary) => {
        if (!isMounted) return;
        setTasks(summary.tasks);
        setProjects(summary.projects);
        setError('');
      })
      .catch(() => {
        if (isMounted) setError('Unable to load workspace data.');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo(
    () => ({
      tasks,
      setTasks,
      projects,
      setProjects,
      teamMembers,
      loading,
      error,
    }),
    [tasks, projects, loading, error]
  );

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error('useWorkspace must be used inside WorkspaceProvider');
  }
  return context;
}
