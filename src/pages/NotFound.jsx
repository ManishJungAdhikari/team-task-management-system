import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Page not found</h1>
      <p>The page you requested does not exist in this workspace.</p>
      <Link className="primary-button" to="/">Back to dashboard</Link>
    </main>
  );
}
