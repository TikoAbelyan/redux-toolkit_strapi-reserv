import { Button, Form, Input, message, Select } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import { CustomerCard } from "./components/CustomerCard";
import { ReservationCard } from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const tableReservation = useSelector(
    (state: RootState) => state.reservations.table
  );
  const [reservationNameInput, setReservationNameInput] = useState("");
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const user = useSelector((state: RootState) => state.oauth.value);
  const customers = useSelector((state: RootState) => state.customer.value);
  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };
  const handleSelectReservation = (e: string) => {
    dispatch(addReservation(e));
    message.success("table added");
  };

  return (
    <div className="App">
      <h1 className="usr">{user[0].username}</h1>
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
            <Input
              placeholder="create table name or select"
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <Button onClick={handleAddReservations} type="primary" size="large">
              Add
            </Button>
          </div>
          <div className="select-table">
            {/* <select
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
            </select> */}
            {/* <Form
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "86",
              }}
              scrollToFirstError
            > */}
            {/* <Form.Item
              name="table"
              label="table"
              rules={[{ required: true, message: "Please add table!" }]}
              // onChange={(e) => handleSelectReservation(e.target.value)}
            > */}
            <Select
              placeholder="select table"
              onChange={handleSelectReservation}
              size="large"
              style={{ width: "100%" }}
            >
              {tableReservation.map((table) => (
                <Select.Option value={table} key={table}>
                  {table}
                </Select.Option>
              ))}
            </Select>
            {/* </Form.Item> */}
            {/* </Form> */}
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
