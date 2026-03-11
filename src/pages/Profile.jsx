import PageHeader from '../components/PageHeader.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="User account"
        title="Profile"
        description="Manage profile information used in the project workspace."
      />

      <section className="panel profile-layout">
        <div className="profile-avatar">MA</div>
        <form className="settings-form">
          <label>
            Full name
            <input defaultValue={user?.name} />
          </label>
          <label>
            Email
            <input defaultValue={user?.email} type="email" />
          </label>
          <label>
            Role
            <input defaultValue={user?.role} />
          </label>
          <label>
            Department
            <input defaultValue="Operations" />
          </label>
          <label>
            Bio
            <textarea defaultValue="Product team member focused on planning, task coordination, and project delivery." />
          </label>
          <button className="primary-button" type="button">Save Profile</button>
        </form>
      </section>
    </div>
  );
}
