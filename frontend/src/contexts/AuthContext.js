import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  const register = async (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const login = async (credentials) => {
    setUser({ firstName: 'Sample', lastName: 'User', email: credentials.email });
    setIsAuthenticated(true);
    setIsAdmin(false);
  };

  const adminLogin = async (credentials) => {
    setUser({ firstName: 'Admin', lastName: 'User', email: credentials.email });
    setIsAuthenticated(true);
    setIsAdmin(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setIsAdmin(false);
  };

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, user, register, login, adminLogin, logout, products, addProduct }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
