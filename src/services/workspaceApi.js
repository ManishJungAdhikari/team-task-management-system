import { initialProjects, initialTasks, teamMembers } from '../data/mockData.js';

function wait(ms = 350) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export async function fetchWorkspaceSummary() {
  await wait();
  return {
    tasks: initialTasks,
    projects: initialProjects,
    members: teamMembers,
  };
}
