import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import useProduct from "../hooks/use-product";
import useOrder from "../hooks/use-order";
import { COOKING, PROCESSING } from "../utils/constant";
import Loading from "../components/Loading";

export default function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const { createProductList: productList } = useProduct();
  const { setCreateOrderList } = useOrder();

  const navigate = useNavigate();

  const getCurrentDate = () => {
    return moment().format("DD/MM/YYYY, h:mm:ss a");
  };

  const getTotalPrice = () => {
    let total = productList.reduce((curr, product) => {
      return (curr += product.price * product.amount);
    }, 0);
    setTotalPrice(total);
  };

  const waitAndNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/payment");
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const initOrder = {
      totalPrice: totalPrice,
      slipURL: "",
      orderStatus: COOKING,
      paymentStatus: PROCESSING,
      orderDetail: [],
    };

    if (productList.length > 0) {
      productList.forEach((product) => {
        if (product.amount > 0) {
          let orderItem = {
            amount: product.amount,
            price: product.price,
            productId: product.id,
          };
          initOrder.orderDetail.push(orderItem);
        }
      });
    }

    setCreateOrderList(initOrder);
    waitAndNavigate();
  };

  useEffect(() => {
    getTotalPrice();
  }, []);

  return (
    <div className=" bg-pink-200 min-h-screen">
      <div className="btn  btn-ghost text-2xl m-4 y-2 font-semibold">
        <button onClick={() => navigate("/product")}> &lt; Cart</button>
      </div>
      {!isLoading ? (
        <div>
          <div className="mx-auto max-w-2xl bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4 my-6">
            <div>{getCurrentDate()}</div>
            <br />
            <div>
              {productList.map((product) => {
                if (product.amount > 0) {
                  return (
                    <div
                      key={product.id}
                      className="flex flex-row justify-between"
                    >
                      <div>
                        Ice-cream {product.name} x {product.amount}
                      </div>
                      <div>{product.amount * product.price} Baht</div>
                    </div>
                  );
                } else {
                  ("");
                }
              })}
            </div>
            <br />
            <div className="flex flex-row justify-between font-semibold">
              <div>Total price</div>
              <div>{totalPrice} Bath</div>
            </div>
          </div>
          <div className="flex justify-center m-4 y-2 pt-8">
            <button
              className="btn btn-warning text-2xl hover:text-white bg-orange-400 hover:bg-orange-400 hover:bg-opacity-50 font-semibold"
              onClick={handleSubmit}
            >
              Check out
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
