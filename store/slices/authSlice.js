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
    role: 4,
    status: 0,
    phone: "",
    avatar: '',
    userId: 0,
    shippingAddress: ""
  };
  
  export const loginSlice = createSlice({
    name: 'login',
    initialState,
  // The `reducers` field lets us define reducers and generate associated actions. 
  // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app. 
  // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
    reducers: {
      
      login: (state, action) => {
        state.logined = action.payload['logined'];
        state.userId = action.payload['userId'];
        state.firstName = action.payload['firstName'];
        state.lastName = action.payload['lastName'];
        state.email = action.payload['email'];
        state.role = action.payload['role'];
        state.phone = action.payload['phone'];
        state.country = action.payload['country'];
        state.state = action.payload['state'];
        state.city = action.payload['city'];
        state.apartment = action.payload['apartment'];
        state.address = action.payload['address'];
        state.zipcode = action.payload['zipcode'];
        state.avatar = action.payload['avatar'];
        state.status = action.payload['status'];
        state.authToken = action.payload['authToken'];

        localStorage.setItem('auth', JSON.stringify(state));
      },

      logout: (state) => {
        state.userId = 0,
        state.logined = false,
        state.authToken = "",
        state.firstName = "",
        state.lastName = "",
        state.email = "",
        state.address = "",
        state.is_verify = 0,
        state.phone = "",
        state.avatar = "",

        localStorage.removeItem('authToken');
        localStorage.removeItem('myBag');
        localStorage.removeItem('shippingAddress');
      },

      setLogin: (state) => {
        state.logined = true;
      },

      setAvatar: (state, action) => {
        state.avatar = action.payload['avatar'];
      }, 

      setShippingAddress: (state, action) => {
        state.shippingAddress = JSON.stringify(action.payload['shippingAddress']);
        localStorage.setItem('shippingAddress', JSON.stringify(action.payload['shippingAddress']));
      },
    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    login,
    logout,
    setLogin,
    setAvatar, 
    setShippingAddress
  } = loginSlice.actions;
  
  // exporting the reducer here, as we need to add this to the store
  export default loginSlice.reducer;