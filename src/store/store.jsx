import { configureStore } from "@reduxjs/toolkit";
import { houseApi } from "../services/houseapi";
export const store = configureStore({
  reducer: {
    [houseApi.reducerPath]: houseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(houseApi.middleware),
});
