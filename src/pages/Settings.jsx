import { Moon, Sun } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';

export default function Settings() {
  function toggleTheme(theme) {
    document.documentElement.dataset.theme = theme;
  }

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
            <button type="button" onClick={() => toggleTheme('light')}><Sun size={18} /> Light</button>
            <button type="button" onClick={() => toggleTheme('dark')}><Moon size={18} /> Dark</button>
          </div>
        </div>

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
      </section>
    </div>
  );
}
