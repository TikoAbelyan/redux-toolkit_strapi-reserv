import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "../features/customerSlice";
import loginReducer from "../features/loginSlice";
import reservationsReducer from "../features/reservationSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customer: customerSlice,
    oauth: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
