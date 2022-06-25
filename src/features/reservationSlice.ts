import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
  table: string[];
}

const initialState: ReservationState = {
  value: [],
  table: ["Table 1", "Table 2", "Table 3"],
};
export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
    addTableReservation: (state, action: PayloadAction<string>) => {
      state.table.push(action.payload);
    },
  },
});

export const { addReservation, removeReservation, addTableReservation } =
  reservationSlice.actions;
export default reservationSlice.reducer;
