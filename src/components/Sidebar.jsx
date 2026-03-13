import { BarChart3, BriefcaseBusiness, FolderKanban, LayoutDashboard, Settings, UserCircle, Users, CheckSquare } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/tasks', label: 'Tasks', icon: CheckSquare },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/team', label: 'Team', icon: Users },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/profile', label: 'Profile', icon: UserCircle },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark" aria-hidden="true">
          <BriefcaseBusiness size={22} />
        </div>
        <div>
          <strong>Team Manager</strong>
          <span>Workspace</span>
        </div>
      </div>

      <nav className="nav-list">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
