import { combineReducers } from 'redux';
import {
  LOGIN_SUCCESS,
  LOGOUT,
  SET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './actions';

// Initial states
const initialUserState = {
  user: null,
};

const initialProductState = {
  products: [],
};

const initialCartState = {
  cart: [],
};

// User reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

// Product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

// Cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// Root reducer
const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
