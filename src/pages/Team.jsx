import PageHeader from '../components/PageHeader.jsx';
import { teamMembers } from '../data/mockData.js';

const activity = [
  'Supervisor reviewed dashboard layout and requested improved spacing.',
  'Product team completed task board responsive adjustments.',
  'UI reviewer suggested stronger contrast for completed status labels.',
  'Backend support confirmed mock API response structure for tasks.',
];

export default function Team() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Collaboration"
        title="Team"
        description="Review team members, communication updates, and project activity."
      />

      <section className="content-grid">
        <article className="panel">
          <div className="panel-header">
            <h2>Team Members</h2>
            <span>{teamMembers.length} people</span>
          </div>
          <div className="member-list">
            {teamMembers.map((member) => (
              <div key={member.id} className="member-row">
                <div className="avatar">{member.name.split(' ').map((part) => part[0]).join('')}</div>
                <div>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
                <span className={`presence ${member.status}`}>{member.status}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <h2>Activity Feed</h2>
            <span>Latest updates</span>
          </div>
          <div className="activity-list">
            {activity.map((item) => (
              <div key={item} className="activity-item">{item}</div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
