import { useEffect } from "react";
import useProduct from "../hooks/use-product";
import Loading from "../components/Loading";

import RowEditProduct from "../components/RowEditProduct";
import { useState } from "react";

export default function EditProductPage() {
  const { productList, getProduct } = useProduct();
  const [isLoading, setLoading] = useState(false);

  const loadingMessage = "EDITING PRODUCT ...";

  useEffect(() => {
    getProduct()
      .then(() => {
        setLoading(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {!isLoading ? (
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
      ) : (
        <div className="h-screen bg-transparent ">
          <div className="min-[900px]:pt-[19.25rem] min-[900px]:pl-[1.25rem]">
            <Loading message={loadingMessage} />
          </div>
        </div>
      )}
    </div>
  );
}
