import { configureStore } from "@reduxjs/toolkit";
import saunaConfigReducer from "./SaunaConfigSlice.ts";

const store = configureStore({
  reducer: {
    saunaConfig: saunaConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
