import { createContext, useContext, useMemo, useState } from 'react';
import { initialProjects, initialTasks, teamMembers } from '../data/mockData.js';

const WorkspaceContext = createContext(null);

export function WorkspaceProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [projects, setProjects] = useState(initialProjects);

  const value = useMemo(
    () => ({
      tasks,
      setTasks,
      projects,
      setProjects,
      teamMembers,
    }),
    [tasks, projects]
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
