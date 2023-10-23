import { useState, useRef } from "react";
import useProduct from "../hooks/use-product";
import { PencilIcon, SaveIcon, CloseIcon } from "../icons/index";

export default function RowEditProduct({
  id,
  name,
  amount,
  price,
  productStatus,
}) {
  const { updateProduct, getProduct, deleteProduct, updateStatusProductById } =
    useProduct();
  const refSelect = useRef(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleOnClick = () => {
    setIsEditMode(true);
  };
  const [input, setInput] = useState({
    name,
    amount,
    price,
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const updateEditRow = async () => {
    try {
      await updateProduct({ ...input, productId: id });
      setIsEditMode(false);
      await getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProductRow = async () => {
    try {
      await deleteProduct(id);
      await getProduct();
      alert(`Already delete product ${name}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeProductStatus = async (status) => {
    try {
      refSelect?.current?.blur();
      await updateStatusProductById(id, status);
      await getProduct();
      setIsEditMode(false);

      alert(`Already update product ${name}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr
      key={id}
      className="bg-white border-b hover:bg-orange-100 hover:font-semibold"
    >
      <td className="text-center ">{id}</td>
      <td className="p-4">
        {isEditMode ? (
          <input name="name" value={input.name} onChange={handleChangeInput} />
        ) : (
          name
        )}
      </td>
      <td className="text-right">
        {isEditMode ? (
          <input
            name="amount"
            value={input.amount}
            onChange={handleChangeInput}
          />
        ) : (
          amount
        )}
      </td>
      <td className="text-right">
        {isEditMode ? (
          <input
            name="price"
            value={input.price}
            onChange={handleChangeInput}
          />
        ) : (
          price
        )}
      </td>
      <td className="text-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            {productStatus === "AVAILABLE" ? (
              <span className="text-green-500">{productStatus}</span>
            ) : (
              <span className="text-red-600">{productStatus}</span>
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
                  handleChangeProductStatus("AVAILABLE");
                }}
              >
                <a className="text-green-500">AVAILABLE</a>
              </li>
              <li
                onClick={() => {
                  handleChangeProductStatus("NOTAVAILABLE");
                }}
              >
                <a className="text-red-600">NOT AVAILABLE</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </td>
      <td
        onClick={isEditMode ? updateEditRow : handleOnClick}
        className="cursor-pointer"
      >
        {isEditMode ? (
          <span>
            <SaveIcon />
            &nbsp; DONE
          </span>
        ) : (
          <span>
            <PencilIcon />
            &nbsp; EDIT
          </span>
        )}
      </td>
      <td onClick={deleteProductRow} className="cursor-pointer">
        <span>
          <CloseIcon />
          &nbsp; DELETE
        </span>
      </td>
    </tr>
  );
}
