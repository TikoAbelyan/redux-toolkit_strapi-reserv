import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardTypes {
  name: string;
  index: number;
}
export const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  return (
    <div className="containerCard">
      <div
        className="reservation-card-container"
        onClick={() =>
          dispatch(
            addCustomer({
              id: uuid(),
              name,
              food: [],
            })
          )
        }
      >
        {name}
      </div>
      <button
        onClick={() => {
          dispatch(removeReservation(index));
        }}
      >
        X
      </button>
    </div>
  );
};
