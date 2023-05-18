import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  
  const initialState = {
    isOverlay: false,
    isSpinner: false,
    myBag: [],
    notifications: [],
    orders: [],
    lockets: [],
    products: [],
    colors: [],
    metals: [],
    productTypes: [],
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

      setOrders: (state, action) => {
        state.orders = [...action.payload['orders']];
      },

      setMyBag: (state, action) => {
        state.myBag = action.payload['myBag'];
        localStorage.setItem('myBag', JSON.stringify(state.myBag));
      },

      setQuantityInBag: (state, action) => {
        let arr = JSON.parse(JSON.stringify(state.myBag))
        for(let i = 0; i < arr.length; i++) {
          if(arr[i].locketId == action.payload['locketId'] && arr[i].metalId == action.payload['metalId'] && arr[i].colorId == action.payload['colorId']) {
            arr[i].quantity = action.payload['quantity'];
          }
        }
        state.myBag = [...arr];
        localStorage.setItem('myBag', JSON.stringify(state.myBag));
      },

      setPriceInBag: (state, action) => {
        let arr = JSON.parse(JSON.stringify(state.myBag))
        for(let i = 0; i < arr.length; i++) {
          if(arr[i].locketId == action.payload['locketId'] && arr[i].metalId == action.payload['metalId'] && arr[i].colorId == action.payload['colorId']) {
            arr[i].price = action.payload['price'];
          }
        }
        state.myBag = [...arr];
        localStorage.setItem('myBag', JSON.stringify(state.myBag));
      },

      removeItemFromBag: (state, action) => {
        let arr = []
        for(let i = 0; i < state.myBag.length; i++) {
          if(state.myBag[i].locketId == action.payload['locketId'] && state.myBag[i].metalId == action.payload['metalId'] && state.myBag[i].colorId == action.payload['colorId']) {
            continue;
          }
          arr.push(state.myBag[i])
        }
        state.myBag = [...arr];
        localStorage.setItem('myBag', JSON.stringify(state.myBag));
      },

      setLockets: (state, action) => {
        state.lockets = [...action.payload['lockets']];
      },

      setProducts: (state, action) => {
        state.products = [...action.payload['products']];
      },
      
      setMetals: (state, action) => {
        state.metals = [...action.payload['metals']];
      },
      
      setColors: (state, action) => {
        state.colors = [...action.payload['colors']];
      },

      setProductTypes: (state, action) => {
        state.productTypes = [...action.payload['productTypes']];
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
    setOrders,
    setMyBag,
    setQuantityInBag,
    setPriceInBag,
    removeItemFromBag,
    setLockets,
    setProducts,
    setMetals,
    setColors,
    setProductTypes
  } = utilSlice.actions;
  
  // exporting the reducer here, as we need to add this to the store
  export default utilSlice.reducer;