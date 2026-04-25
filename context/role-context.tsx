'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Role = 'admin' | 'owner' | 'customer';

interface RoleContextType {
  role: Role;
  setRole: (role: Role) => void;
  isHydrated: boolean;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>('admin');
  const [isHydrated, setIsHydrated] = useState(false);
  
  useEffect(() => {
    const saved = localStorage.getItem('effortless-role') as Role;
    if (saved === 'admin' || saved === 'owner' || saved === 'customer') {
      setRole(saved);
    }
    setIsHydrated(true);
  }, []);

  const handleSetRole = (newRole: Role) => {
    setRole(newRole);
    localStorage.setItem('effortless-role', newRole);
  };

  return (
    <RoleContext.Provider value={{ role, setRole: handleSetRole, isHydrated }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) throw new Error('useRole must be used within RoleProvider');
  return context;
}
