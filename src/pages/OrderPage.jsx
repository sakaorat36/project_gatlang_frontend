import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import useOrder from "../hooks/use-order";
import { useEffect } from "react";
import RowShowOrder from "../components/RowShowOrder";

export default function OrderPage() {
  const navigate = useNavigate();

  const { orderList, getOrderByUserId } = useOrder();
  const { authUser } = useAuth();

  useEffect(() => {
    getOrderByUserId(Number(authUser?.id)).catch((err) => {
      alert(err.response.data.message);
    });
  }, []);

  return (
    <div className="bg-pink-200 min-h-screen">
      <div className="btn  btn-ghost text-2xl m-4 y-2 font-semibold">
        <button onClick={() => navigate("/cart")}> &lt; Order</button>
      </div>
      <div className="p-6 grid grid-cols-1 justify-center relative overflow-x-auto overflow-y-auto">
        <table className="table-auto bg-white w-full">
          <thead>
            <tr className="text-center">
              <th className="px-6 py-3">Order No.</th>
              <th>Product Name</th>
              <th>Total Price</th>
              <th>Payment Status</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="bg-white border-b hover:bg-orange-100 hover:font-semibold">
              <td className="text-center ">123</td>
              <td className="p-4">ice-cream Vanilla</td>
              <td className="text-right">200</td>
              <td className="text-center ">
                <span className="text-green-500">PAID</span>
              </td>
              <td className="text-center ">COMPLETE</td>
            </tr>
            <tr className="bg-white border-b hover:bg-orange-100 hover:font-semibold">
              <td className="text-center ">124</td>
              <td className="p-4">ice-cream Vanilla X2</td>
              <td className="text-right">200</td>
              <td className="text-center ">
                <span className="text-red-600">PROCESSING</span>
              </td>
              <td className="text-center ">COOKING</td>
            </tr> */}
            {orderList.map((order, index) => {
              return (
                <RowShowOrder
                  key={index}
                  id={order.id}
                  name={order.name}
                  amount={order.amount}
                  totalPrice={order.totalPrice}
                  paymentStatus={order.paymentStatus}
                  orderStatus={order.orderStatus}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center m-4 y-2">
        <button
          className="btn btn-warning btn-wide text-2xl hover:bg-yellow-200 font-semibold"
          onClick={() => navigate("/product")}
        >
          Back
        </button>
      </div>
    </div>
  );
}
