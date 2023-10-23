import { useEffect } from "react";
import useProduct from "../hooks/use-product";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
  const {
    createProductList: productList,
    getCreateProduct,
    setCreateProductList,
  } = useProduct();

  const navigate = useNavigate();

  useEffect(() => {
    getCreateProduct().catch((err) => {
      alert(err.response.data.message);
    });
  }, []);

  // กดปุ่ม +
  const addAmount = (id) => {
    let index = productList.findIndex((item) => item.id === id);

    let newProductList = [...productList];
    let newProduct = { ...newProductList[index] };

    newProduct["amount"] += 1;
    newProductList[index] = newProduct;
    setCreateProductList(newProductList);
  };

  // กดปุ่ม -
  const decreaseAmount = (id) => {
    let index = productList.findIndex((item) => item.id === id);

    let newProductList = [...productList];
    let newProduct = { ...newProductList[index] };

    newProduct["amount"] -= 1;
    newProductList[index] = newProduct;

    setCreateProductList(newProductList);
  };
  return (
    <div className=" bg-pink-200 min-h-screen">
      <div className="btn  btn-ghost text-2xl m-4 y-2 font-semibold">
        <button onClick={() => navigate("/")}> &lt; Product</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-between pt-6">
        {productList.length > 0 ? (
          productList.map((product) => {
            return (
              <div className="flex justify-center" key={product.id}>
                <Card
                  productId={product.id}
                  productName={product.name}
                  productImage={product.image}
                  productAmount={product.amount}
                  add={addAmount}
                  minus={decreaseAmount}
                />
              </div>
            );
          })
        ) : (
          <div>No Product</div>
        )}
      </div>
      <div className="flex justify-end m-4 y-2">
        <button
          className="btn btn-warning bg-[#ff8e00] text-2xl hover:bg-yellow-200 font-semibold"
          onClick={() => navigate("/cart")}
        >
          Cart
        </button>
      </div>
    </div>
  );
}
