import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  
  const initialState = {
    isOverlay: false,
    isSpinner: false,
    myBag: [],
    notifications: [],
    products: [],
    colors: [],
    metals: [],
  };
  
  export const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
      
      showSpinner: (state) => {
        state.isOverlay = true;
        state.isSpinner = true;
      },

      hideSpinner: (state) => {
        state.isOverlay = false;
        state.isSpinner = false;
      },

      showOverlay: (state) => {
        state.isOverlay = true;
      },

      hideOverlay: (state) => {
        state.isOverlay = false;
      },

      setNotificatioins: (state, action) => {
        state.notifications = action.payload['notifications'];
      },

      setMyBag: (state, action) => {
        state.myBag = action.payload['myBag'];
      },

      setProducts: (state, action) => {
        state.products = action.payload['products'];
      },
      
      setMetals: (state, action) => {
        state.metals = action.payload['metals'];
      },
      
      setColors: (state, action) => {
        state.colors = action.payload['colors'];
      }
    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    showSpinner,
    hideSpinner,
    showOverlay,
    hideOverlay,
    setNotificatioins,
    setMyBag,
    setProducts,
    setMetals,
    setColors,
  } = utilSlice.actions;
  
  // exporting the reducer here, as we need to add this to the store
  export default utilSlice.reducer;