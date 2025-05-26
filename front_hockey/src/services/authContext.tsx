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
  /*const [id, setId] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [surname, setSurname] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);*/
  const [userAuthData, setUserAuthData] = useState<AuthData | null>(null);
  

  useEffect(() => {
    
  }, []);

  const login = (authData: AuthData) => {
    
    setIsAuthenticated(true);
    setUserAuthData(authData);
    /*setName(authData.name);
    setSurname(authData.surname);
    setRole(authData.role);
    setId(authData.id);*/
  };

  const logout = () => {
    
    setIsAuthenticated(false);
    setUserAuthData(null);
    /*setName(null);
    setSurname(null);
    setRole(null);
    setId(null);*/
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