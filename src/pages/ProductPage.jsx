import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProduct from "../hooks/use-product";
import Card from "../components/Card";
import Loading from "../components/Loading";

export default function ProductPage() {
  const {
    createProductList: productList,
    getCreateProduct,
    setCreateProductList,
  } = useProduct();

  const [isLoading, setLoading] = useState(false);
  const [isDisable, setDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getCreateProduct().catch((err) => {
      alert(err.response.data.message);
    });
  }, []);

  const waitAndNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/cart");
    }, 1000);
  };

  const checkCart = (productList) => {
    let checkCartList = false;

    productList.forEach((product) => {
      if (product.amount !== 0) {
        checkCartList = true;
      }
    });

    if (checkCartList) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  // กดปุ่ม +
  const addAmount = (id) => {
    let index = productList.findIndex((item) => item.id === id);

    let newProductList = [...productList];
    let newProduct = { ...newProductList[index] };

    newProduct["amount"] += 1;
    newProductList[index] = newProduct;

    setCreateProductList(newProductList);
    checkCart(newProductList);
  };

  // กดปุ่ม -
  const decreaseAmount = (id) => {
    let index = productList.findIndex((item) => item.id === id);

    if (productList[index].amount === 0) {
      return;
    }

    let newProductList = [...productList];
    let newProduct = { ...newProductList[index] };

    newProduct["amount"] -= 1;
    newProductList[index] = newProduct;

    setCreateProductList(newProductList);
    checkCart(newProductList);
  };

  return (
    <div className=" bg-pink-200 min-h-screen">
      <div className="btn  btn-ghost text-2xl m-4 y-2 font-semibold">
        <button onClick={() => navigate("/")}> &lt; Product</button>
      </div>
      {!isLoading ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-between py-6">
            {productList
              .filter((el) => el.productStatus !== "NOT AVAILABLE")
              .map((product) => {
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
              })}
          </div>
          <div className="flex justify-end m-4 y-2 pr-16">
            <button
              className="btn btn-warning text-2xl hover:text-white bg-orange-400 hover:bg-orange-400 hover:bg-opacity-50 font-semibold"
              onClick={waitAndNavigate}
              disabled={isDisable}
            >
              NEXT STEP
            </button>
          </div>
        </div>
      ) : (
        <div className="h-screen bg-transparent">
          <div className="min-[900px]:pt-[19.25rem] min-[900px]:pl-[1.25rem]">
            <Loading />
          </div>
        </div>
      )}
    </div>
  );
}
