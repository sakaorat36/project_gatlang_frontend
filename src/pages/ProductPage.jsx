import { useEffect } from "react";
import useProduct from "../hooks/use-product";
import Card from "../components/Card";

export default function ProductPage() {
  const { productList, getProduct } = useProduct();
  console.log(productList);
  useEffect(() => {
    getProduct().catch((err) => {
      alert(err.response.data.message);
    });
    // console.log(getProduct);
  }, []);

  return (
    <div className=" bg-pink-200 min-h-screen">
      <div className="btn  btn-ghost text-2xl m-4 y-2 font-semibold">
        <button> &lt; Product</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-between pt-6">
        {productList.length > 0 ? (
          productList.map((product) => {
            return (
              <div className="flex justify-center" key={product.id}>
                <Card productName={product.name} productImage={product.image} />
              </div>
            );
          })
        ) : (
          <div>No Product</div>
        )}
      </div>
      <div className="flex justify-end m-4 y-2">
        <button className="btn btn-warning btn-wide bg-[#ff8e00] text-2xl hover:bg-yellow-200 font-semibold">
          Cart
        </button>
      </div>
    </div>
  );
}
