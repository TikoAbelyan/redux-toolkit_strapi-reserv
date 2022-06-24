import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}
export const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  return (
    <div className="containerCard">
      <div className="reservation-card-container">{name}</div>
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
