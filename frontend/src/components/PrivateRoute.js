// src/components/PrivateRoute.js

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children, admin }) => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  if (admin && !isAdmin) {
    return <Navigate to="/admin-login" />;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
