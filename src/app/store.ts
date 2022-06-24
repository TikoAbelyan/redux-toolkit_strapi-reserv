import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "../features/customerSlice";
import reservationsReducer from "../features/reservationSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customer: customerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
