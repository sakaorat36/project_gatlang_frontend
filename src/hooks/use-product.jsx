import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export default function useProduct() {
  // const ctx = useContext(ProductContext);
  // console.log("product context", ctx);
  return useContext(ProductContext);
}
