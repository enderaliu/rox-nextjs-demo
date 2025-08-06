'use client';

import { useEffect, useState } from 'react';

export default function APIExample() {
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h2>API User Info</h2>
      {user ? (
        <p data-testid="api-response">
          {user.name} - {user.role}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
