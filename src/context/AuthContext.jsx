import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

const defaultUser = {
  name: 'Demo User',
  email: 'demo@example.com',
  role: 'Workspace Member',
};

function getNameFromEmail(email) {
  const namePart = email.split('@')[0] || 'demo user';
  return namePart
    .split(/[._-]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(defaultUser);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login: (email) => setUser({ ...defaultUser, email, name: getNameFromEmail(email) }),
      logout: () => setUser(null),
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}
