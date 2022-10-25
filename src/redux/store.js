import { configureStore } from "@reduxjs/toolkit";
import { videoApi } from "../servises/fetchApi";
import app from "./appSlice";

export const store = configureStore({
  reducer: {
    [videoApi.reducerPath]: videoApi.reducer,
    app,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videoApi.middleware),
});
