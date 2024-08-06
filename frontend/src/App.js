// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Keep this import if HomePage is used
import LoginPage from './pages/authentication/LoginPage';
import RegisterPage from './pages/authentication/RegisterPage';
import AdminPage from './pages/admin/AdminPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AccountProfile from './pages/account/AccountProfile';
import UserPage from './pages/user/UserPage';
import ProductPage from './pages/ProductPage'; // Import ProductPage
import CartPage from './pages/CartPage'; // Import CartPage
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import CartProvider from './contexts/CartContext'; // Import CartProvider
import AuthProvider from './contexts/AuthContext'; // Import AuthProvider
import ProductManagement from './pages/admin/ProductManagement'; // Import ProductManagement
import UserManagement from './pages/admin/UserManagement'; // Import UserManagement
import OrderManagement from './pages/admin/OrderManagement'; // Import OrderManagement
import Settings from './pages/admin/Settings'; // Import Settings
import './global.css';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/register" />} /> {/* Redirect to home page */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<PrivateRoute admin><AdminPage /></PrivateRoute>} />
            <Route path="/admin/products" element={<PrivateRoute admin><ProductManagement /></PrivateRoute>} />
            <Route path="/admin/users" element={<PrivateRoute admin><UserManagement /></PrivateRoute>} />
            <Route path="/admin/orders" element={<PrivateRoute admin><OrderManagement /></PrivateRoute>} />
            <Route path="/admin/settings" element={<PrivateRoute admin><Settings /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><AccountProfile /></PrivateRoute>} />
            <Route path="/user" element={<PrivateRoute><UserPage /></PrivateRoute>} />
            <Route path="/products" element={<PrivateRoute><ProductPage /></PrivateRoute>} />
            <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
