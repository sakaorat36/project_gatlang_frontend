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
                <th>Amount</th>
                <th>Price</th>
                <th>Product Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productList.length > 0
                ? productList.map((product) => {
                    const { id, name, amount, price, productStatus } = product;
                    return (
                      <RowEditProduct
                        key={id}
                        id={id}
                        name={name}
                        amount={amount}
                        price={price}
                        productStatus={productStatus}
                      />
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>No Product</h1>
      )}
    </div>
  );
}
