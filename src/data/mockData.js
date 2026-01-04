export const teamMembers = [
  { id: 1, name: 'Aarav Sharma', role: 'Project Supervisor', status: 'online' },
  { id: 2, name: 'Demo User', role: 'Product Team', status: 'online' },
  { id: 3, name: 'Nisha Karki', role: 'UI Reviewer', status: 'away' },
  { id: 4, name: 'Rohit Thapa', role: 'Backend Support', status: 'offline' },
];

export const initialProjects = [
  {
    id: 1,
    name: 'Client Service Portal',
    client: 'BrightPath Consulting',
    progress: 74,
    status: 'In Progress',
    deadline: '2026-02-28',
  },
  {
    id: 2,
    name: 'Sales Pipeline Tracker',
    client: 'Himalayan Retail Group',
    progress: 58,
    status: 'In Progress',
    deadline: '2026-03-05',
  },
  {
    id: 3,
    name: 'Inventory Request Board',
    client: 'Everest Supplies',
    progress: 42,
    status: 'Planning',
    deadline: '2026-03-10',
  },
];

export const initialTasks = [
  {
    id: 1,
    title: 'Create dashboard summary cards',
    project: 'Client Service Portal',
    assignee: 'Demo User',
    status: 'Completed',
    priority: 'High',
    dueDate: '2026-01-17',
  },
  {
    id: 2,
    title: 'Implement responsive task board',
    project: 'Sales Pipeline Tracker',
    assignee: 'Demo User',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2026-01-24',
  },
  {
    id: 3,
    title: 'Prepare team activity feed layout',
    project: 'Inventory Request Board',
    assignee: 'Demo User',
    status: 'To Do',
    priority: 'Medium',
    dueDate: '2026-02-12',
  },
  {
    id: 4,
    title: 'Review dark mode contrast',
    project: 'Client Service Portal',
    assignee: 'Demo User',
    status: 'To Do',
    priority: 'Medium',
    dueDate: '2026-03-03',
  },
];
