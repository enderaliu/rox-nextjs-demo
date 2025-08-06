'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  name: string;
  email: string;
};

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

const defaultUser = { name: 'Yuma', email: 'yuma@rox.com' };

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
}
