import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('demo@example.com');
  const [error, setError] = useState('');

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
            if (!email.includes('@')) {
              setError('Enter a valid email address.');
              return;
            }
            login(email);
          }}
        >
          <label>
            Email address
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required />
          </label>
          {error ? <span className="form-error">{error}</span> : null}
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
