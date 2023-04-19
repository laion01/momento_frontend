import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  
  const initialState = {
    logined: false,
    token: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    is_verify: 0,
    phone: "",
    userId: null,
    billingAddress: {}
  };
  
  export const loginSlice = createSlice({
    name: 'login',
    initialState,
  // The `reducers` field lets us define reducers and generate associated actions. 
  // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app. 
  // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
    reducers: {
      
      login: (state, action) => {
        state.logined = true;
        state.userId = action.payload['id'];
        state.token = action.payload['token'];
        state.firstName = action.payload['firstName'];
        state.lastName = action.payload['lastName'];
        state.email = action.payload['email'];
        state.is_verify = action.payload['is_verify'];
        state.address = action.payload['address'];
        state.phone = action.payload['phone'];
        state.billingAddress = action.payload['billingAddress'];

        localStorage.setItem('auth', JSON.stringify(state));
        localStorage.setItem('token', state.token);
      },

      logout: (state) => {
        state.userId = null,
        state.logined = false,
        state.token = "",
        state.firstName = "",
        state.lastName = "",
        state.email = "",
        state.address = "",
        state.is_verify = 0,
        state.phone = "",
        state.billingAddress = {}
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
      },

      setBillingAddress: (state, action) => {
        state.billingAddress = action.payload['billingAddress'];
      },
    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    login,
    logout,
    setBillingAddress
  } = loginSlice.actions;
  
  // exporting the reducer here, as we need to add this to the store
  export default loginSlice.reducer;