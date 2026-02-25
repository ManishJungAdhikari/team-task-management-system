import { initialProjects, initialTasks, teamMembers } from '../data/mockData.js';

function wait(ms = 350) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function createResponse(data) {
  return {
    ok: true,
    receivedAt: new Date().toISOString(),
    data,
  };
}

export async function fetchWorkspaceSummary() {
  await wait();
  return createResponse({
    tasks: initialTasks,
    projects: initialProjects,
    members: teamMembers,
  }).data;
}
