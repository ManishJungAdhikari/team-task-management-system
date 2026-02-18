import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { teamMembers } from '../data/mockData.js';

const activity = [
  'Supervisor reviewed dashboard layout and requested improved spacing.',
  'Product team completed task board responsive adjustments.',
  'UI reviewer suggested stronger contrast for completed status labels.',
  'Backend support confirmed mock API response structure for tasks.',
];

export default function Team() {
  const [updates, setUpdates] = useState(activity);
  const [message, setMessage] = useState('');

  function addUpdate(event) {
    event.preventDefault();
    if (!message.trim()) return;
    setUpdates((current) => [message.trim(), ...current]);
    setMessage('');
  }

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
                <span className={`presence ${member.status}`}>{member.status === 'online' ? 'Available' : member.status === 'away' ? 'In review' : 'Offline'}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <h2>Activity Feed</h2>
            <span>Latest updates</span>
          </div>
          <form className="activity-form" onSubmit={addUpdate}>
            <input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Share a project update" />
            <button className="primary-button" type="submit">Post</button>
          </form>
          <div className="activity-list">
            {updates.map((item) => (
              <div key={item} className="activity-item">{item}</div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
