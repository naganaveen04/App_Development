import { loginSuccess, setProducts } from './actions';
import { login, fetchProducts } from '../services/apiService';

// Thunk for user login
export const userLogin = (credentials) => {
  return async (dispatch) => {
    try {
      const user = await login(credentials);
      dispatch(loginSuccess(user));
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
};

// Thunk for loading products
export const loadProducts = () => {
  return async (dispatch) => {
    try {
      const products = await fetchProducts();
      dispatch(setProducts(products));
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };
};

// Similarly, you can create thunks for registration, fetching user data, etc.
