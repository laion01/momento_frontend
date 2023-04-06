import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  
  const initialState = {
    isOverlay: false,
    isSpinner: false,
    isWalletConnector: false,
    isCryptoPayment: false,
    isPaypalPayment: false,
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

      showWalletConnector: (state) => {
        state.isWalletConnector = true;
      },

      hideWalletConnector: (state) => {
        state.isWalletConnector = false;
      },

      showCryptoPayment: (state) => {
        state.isCryptoPayment = true;
      },

      hideCryptoPayment: (state) => {
        state.isCryptoPayment = false;
      },

      showPaypalPayment: (state) => {
        state.isPaypalPayment = true;
      },

      hidePaypalPayment: (state) => {
        state.isPaypalPayment = false;
      }
    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    showSpinner,
    hideSpinner,
    showOverlay,
    hideOverlay,
    showWalletConnector,
    hideWalletConnector,
    showCryptoPayment,
    hideCryptoPayment,
    showPaypalPayment,
    hidePaypalPayment,
  } = utilSlice.actions;
  
  // exporting the reducer here, as we need to add this to the store
  export default utilSlice.reducer;