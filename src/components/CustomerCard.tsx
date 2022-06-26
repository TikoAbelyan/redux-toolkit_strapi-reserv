import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

export const CustomerCard = ({ id, name, food }: CustomerCardType) => {
  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState("");

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return (
              <div className="food">
                <p>{food}</p>
              </div>
            );
          })}
        </div>
        <div className="customer-food-input-container">
          <Input
            placeholder="food"
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <Button
            onClick={() => {
              dispatch(addFoodCustomer({ id, food: customerFoodInput }));
              setCustomerFoodInput("");
            }}
            type="primary"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
