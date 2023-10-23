import { useEffect } from "react";
import useProduct from "../hooks/use-product";

import RowEditProduct from "../components/RowEditProduct";

export default function EditProductPage() {
  const { productList, getProduct } = useProduct();

  useEffect(() => {
    getProduct().catch((err) => {
      alert(err.response.data.message);
    });
  }, []);

  return (
    <div className="bg-pink-200 min-h-screen">
      {productList.length > 0 ? (
        <div className="p-6 grid grid-cols-1 justify-center relative overflow-x-auto overflow-y-auto">
          <table className="table-auto bg-white w-full">
            <thead>
              <tr className="text-center">
                <th className="px-6 py-3">ID</th>
                <th>Name</th>
                <th className="text-right">Amount</th>
                <th className="text-right">Price</th>
                <th>Product Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product) => {
                return (
                  <RowEditProduct
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    amount={product.amount}
                    price={product.price}
                    productStatus={product.productStatus}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>No Product</h1>
      )}
    </div>
  );
}
