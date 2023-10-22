import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [success, setSuccess] = useState(null);

  useEffect(() => {}, []);

  const getOrder = async () => {
    const res = await axios.get("/order");
    setOrder(res.data);
  };

  const createOrder = async (input) => {
    const res = await axios.post("/order/create", input);
    setSuccess(res.data.createOrder);
  };

  const updateOrderStatus = async (input) => {
    const res = await axios.patch("/product/update", input);
    setSuccess(res.data);
  };

  const getOrderByUserId = async (input) => {
    const res = await axios.get(`/order/${input?.id}`);
    setSuccess(res.data);
  };

  return (
    <OrderContext.Provider
      value={{
        getOrder,
        createOrder,
        updateOrderStatus,
        getOrderByUserId,
        order,
        success,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
