import { configureStore } from "@reduxjs/toolkit";
// import homeReducer from "./slice/HomeSlice";


const reducer = {
//   home: homeReducer,
};

export const store = configureStore({
  reducer: reducer,
});
