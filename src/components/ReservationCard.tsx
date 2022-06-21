import React from "react";

interface ReservationCardTypes {
  name: string;
}
export const ReservationCard = ({ name }: ReservationCardTypes) => {
  return <div className="reservation-card-container">{name}</div>;
};
