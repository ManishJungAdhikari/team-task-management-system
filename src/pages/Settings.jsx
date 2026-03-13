import { Moon, Sun } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';

export default function Settings() {
  function toggleTheme(theme) {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('team-manager-theme', theme);
  }

  const savedTheme = window.localStorage.getItem('team-manager-theme') || 'light';
  document.documentElement.dataset.theme = savedTheme;

  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Preferences"
        title="Settings"
        description="Adjust theme, notifications, and workspace display preferences."
      />

      <section className="panel settings-form">
        <div>
          <h2>Theme</h2>
          <p>Switch between light and dark modes for accessibility testing.</p>
          <div className="segmented-controls">
            <button className={savedTheme === 'light' ? 'selected' : ''} type="button" onClick={() => toggleTheme('light')}><Sun size={18} /> Light</button>
            <button className={savedTheme === 'dark' ? 'selected' : ''} type="button" onClick={() => toggleTheme('dark')}><Moon size={18} /> Dark</button>
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        <label className="toggle-row">
          <input type="checkbox" defaultChecked />
          Email notifications for assigned tasks
        </label>
        <label className="toggle-row">
          <input type="checkbox" defaultChecked />
          Weekly progress summary
        </label>
        <label className="toggle-row">
          <input type="checkbox" />
          Product update announcements
        </label>
=======
        <div className="settings-group">
          <h2>Notifications</h2>
          <p>Choose which updates should be visible for workspace members.</p>
          <div className="notification-preview">
            <strong>Preview</strong>
            <span>Task updates and weekly summaries will appear in the workspace activity area.</span>
          </div>
=======
        <div className="settings-group">
          <h2>Notifications</h2>
          <p>Choose which updates should be visible for workspace members.</p>
>>>>>>> 26a8ec4 (polish responsive layout and accessibility labels)
          <label className="toggle-row">
            <input type="checkbox" defaultChecked />
            <span>
              <strong>Assigned task alerts</strong>
              <small>Notify users when a task is assigned or updated.</small>
            </span>
          </label>
          <label className="toggle-row">
            <input type="checkbox" defaultChecked />
            <span>
              <strong>Weekly progress summary</strong>
              <small>Show a short summary of project progress each week.</small>
            </span>
          </label>
          <label className="toggle-row">
            <input type="checkbox" />
            <span>
              <strong>Product update announcements</strong>
              <small>Display occasional updates about new workspace features.</small>
            </span>
          </label>
        </div>
<<<<<<< HEAD
>>>>>>> f99e9ae (improve settings notification controls)
=======
>>>>>>> 26a8ec4 (polish responsive layout and accessibility labels)
      </section>
    </div>
  );
}
