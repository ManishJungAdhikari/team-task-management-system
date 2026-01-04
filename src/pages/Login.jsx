import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('demo@example.com');

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="auth-screen">
      <section className="auth-panel">
        <span className="eyebrow">Team workspace</span>
        <h1>Sign in to Team Manager</h1>
        <p>Use the demo account to access the project management dashboard.</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            login(email);
          }}
        >
          <label>
            Email address
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required />
          </label>
          <label>
            Password
            <input value="password123" type="password" readOnly />
          </label>
          <button className="primary-button" type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}
