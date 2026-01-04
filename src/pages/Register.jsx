import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <main className="auth-screen">
      <section className="auth-panel">
        <span className="eyebrow">Create account</span>
        <h1>Register workspace user</h1>
        <p>This form demonstrates the account creation interface for the project prototype.</p>
        <form>
          <label>
            Full name
            <input placeholder="Your name" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="name@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Create password" />
          </label>
          <button className="primary-button" type="button">Create Account</button>
        </form>
        <p className="auth-switch">Already registered? <Link to="/login">Login</Link></p>
      </section>
    </main>
  );
}
