'use client';

import { UserProvider, useUser } from './UserContext';

function UserInfo() {
  const { user } = useUser();

  return (
    <div>
      <h1>User Context Example</h1>
      <p data-testid="context-user">{user.name} - {user.email}</p>
    </div>
  );
}

export default function ContextExamplePage() {
  return (
    <UserProvider>
      <UserInfo />
    </UserProvider>
  );
}
