import redux, { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
  reducer:  {counter: counterReducer, auth: authReducer}
  //if we hcounterSlice.reducer,ad more slices we could add them as an object in the reducer: {thing, thing}
});

export default store;
