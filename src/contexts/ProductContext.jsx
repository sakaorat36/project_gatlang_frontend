import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {}, []);

  const getProduct = async () => {
    const res = await axios.get("/product");

    if (res.data?.products) {
      setProductList(res.data.products);
    }
  };

  const createProduct = async (input) => {
    const res = await axios.post("/product/create", input);
    setSuccess(res.data.createProduct);
  };

  const updateProduct = async (input) => {
    const res = await axios.patch("/product/update", input);
    setSuccess(res.data);
  };

  const deleteProduct = async (id) => {
    const res = await axios.delete(`/product/delete/${id}`);
    setSuccess(res.data);
  };

  const updateStatusProductById = async (id, status) => {
    const res = await axios.patch(`/product/update/product-status/${id}`, {
      productStatus: status,
    });
    setSuccess(res.data);
  };

  return (
    <ProductContext.Provider
      value={{
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct,
        updateStatusProductById,
        productList,
        success,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
