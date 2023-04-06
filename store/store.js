import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import utilReducer from './slices/utilSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    util: utilReducer
  },
});