import { useEffect } from "react";
import useOrder from "../hooks/use-order";
import RowEditOrder from "../components/RowEditOrder";

export default function EditOrderPage() {
  const { orderList, getOrder } = useOrder();

  useEffect(() => {
    getOrder().catch((err) => {
      alert(err.response.data.message);
    });
  }, []);

  return (
    <div className="bg-pink-200 min-h-screen">
      <div className="p-6 grid grid-cols-1 justify-center relative overflow-x-auto overflow-y-auto">
        <table className="table-auto bg-white w-full">
          <thead>
            <tr className="text-center border-b">
              <th className="px-6 py-3"> Order No.</th>
              <th>Product Name</th>
              <th className="text-right">Total Price</th>
              <th>Pay Slip</th>
              <th>Payment Status</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orderList?.map((order, index) => {
              return (
                <RowEditOrder
                  key={index}
                  id={order.id}
                  name={order.name}
                  amount={order.amount}
                  orderStatus={order.orderStatus}
                  paymentStatus={order.paymentStatus}
                  slipURL={order.slipURL}
                  totalPrice={order.totalPrice}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
