import { LogOut, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export default function Topbar() {
  const { user, logout } = useAuth();

  return (
    <header className="topbar">
      <div className="search-box">
        <Search size={18} />
        <input aria-label="Search workspace" placeholder="Search tasks, projects, members..." type="search" />
      </div>
      <div className="profile-chip">
        <div>
          <strong>{user?.name}</strong>
          <span>{user?.role}</span>
        </div>
        <button className="icon-button" onClick={logout} aria-label="Log out">
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
}
