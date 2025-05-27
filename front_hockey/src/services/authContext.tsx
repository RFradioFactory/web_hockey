// contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthData } from './api';

export interface AuthContextType {
  isAuth: boolean;
  userAuthData: AuthData | null;
  login: (authData: AuthData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAuthData, setUserAuthData] = useState<AuthData | null>(null);
  

  useEffect(() => {
    setUserAuthData(JSON.parse(localStorage.getItem('userAuthData') || 'null'));
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
  }, []);

  const login = (authData: AuthData) => {
    
    setIsAuthenticated(true);
    setUserAuthData(authData);
    localStorage.setItem('userAuthData', JSON.stringify(authData));
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    
    setIsAuthenticated(false);
    setUserAuthData(null);
    localStorage.clear();
    
  };

  return (
    <AuthContext.Provider value={{ isAuth: isAuthenticated, userAuthData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};