import { useState, useRef } from "react";
import useOrder from "../hooks/use-order";
import Modal from "./Modal";
import { PencilIcon, SaveIcon } from "../icons/index";

export default function RowEditOrder({
  id,
  name,
  amount,
  orderStatus,
  paymentStatus,
  slipURL,
  totalPrice,
}) {
  const { getOrder, updateOrderStatusById, updatePaymentStatusById } =
    useOrder();

  const refSelect = useRef(null);

  const [isEditMode, setIsEditMode] = useState(false);

  const handleChangeOrderStatus = async (status) => {
    try {
      refSelect?.current?.blur();
      await updateOrderStatusById(id, status);
      await getOrder();
      setIsEditMode(false);

      alert(`Already update product ${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangePaymentStatus = async (status) => {
    try {
      refSelect?.current?.blur();
      await updatePaymentStatusById(id, status);
      await getOrder();
      setIsEditMode(false);

      alert(`Already update order ${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr
      key={id}
      className="bg-white border-none hover:bg-orange-100 hover:font-semibold"
    >
      <td className="text-center">{id}</td>
      <td className="text-left leading-[76px]">
        {name} {amount > 1 ? `x ${amount}` : ""}
      </td>
      <td className="text-right">{totalPrice}</td>
      <td className="flex flex-col items-center">
        {slipURL ? (
          <div className="m-1">
            <img
              src={slipURL}
              alt="slipURL"
              onClick={() => document.getElementById("image-modal").showModal()}
              className="w-[100px] hover:scale-125 transition duration-500 cursor-pointer"
            />
            <Modal slipURL={slipURL} />
          </div>
        ) : (
          ""
        )}
      </td>

      {/* Payment Status */}
      <td className="text-center">
        {paymentStatus ? (
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1 bg-transparent">
              {paymentStatus === "PAID" ? (
                <span className="text-green-500">{paymentStatus}</span>
              ) : (
                <span className="text-red-600">{paymentStatus}</span>
              )}
            </label>
            {isEditMode ? (
              <ul
                ref={refSelect}
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li
                  onClick={() => {
                    handleChangePaymentStatus("PAID");
                  }}
                >
                  <a className="text-green-500">PAID</a>
                </li>
                <li
                  onClick={() => {
                    handleChangePaymentStatus("PROCESSING");
                  }}
                >
                  <a className="text-red-600">PROCESSING</a>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </td>
      {/* Order Status */}
      <td className="text-center">
        {orderStatus ? (
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1 bg-transparent">
              {orderStatus === "COMPLETE" ? (
                <span className="text-green-500">{orderStatus}</span>
              ) : (
                <span className="text-red-600">{orderStatus}</span>
              )}
            </label>
            {isEditMode ? (
              <ul
                ref={refSelect}
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li
                  onClick={() => {
                    handleChangeOrderStatus("COMPLETE");
                  }}
                >
                  <a className="text-green-500">COMPLETE</a>
                </li>
                <li
                  onClick={() => {
                    handleChangeOrderStatus("COOKING");
                  }}
                >
                  <a className="text-red-600">COOKING</a>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </td>
      <td onClick={() => setIsEditMode(!isEditMode)}>
        {id ? (
          isEditMode ? (
            <span>
              <SaveIcon />
              &nbsp; DONE
            </span>
          ) : (
            <span>
              <PencilIcon />
              &nbsp; EDIT
            </span>
          )
        ) : (
          ""
        )}
      </td>
    </tr>
  );
}
