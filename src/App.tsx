import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import { CustomerCard } from "./components/CustomerCard";
import { ReservationCard } from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const dispatch = useDispatch();
  const tableReservation = useSelector(
    (state: RootState) => state.reservations.table
  );
  const [reservationNameInput, setReservationNameInput] = useState("");
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector((state: RootState) => state.customer.value);
  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };
  const handleSelectReservation = (e: string) => {
    dispatch(addReservation(e));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard name={name} key={name} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
          <div className="select-table">
            <select
              onChange={(e) => handleSelectReservation(e.target.value)}
              defaultValue="select table"
            >
              <option value="" selected>
                Choose Table
              </option>
              {tableReservation.map((table) => (
                <option value={table} key={table}>
                  {table}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                food={customer.food}
                name={customer.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
