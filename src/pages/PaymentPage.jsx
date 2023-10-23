import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useOrder from "../hooks/use-order";
import QRcode from "../assets/qrcode.jpg";

export default function PaymentPage() {
  const navigate = useNavigate();
  const { createOrderList, createOrder } = useOrder();

  const [input, setInput] = useState({
    image: "",
    totalPrice: createOrderList.totalPrice,
    orderDetail: createOrderList.orderDetail,
  });
  const [image, setImage] = useState(null);

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    setInput({ ...input, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("totalPrice", input.totalPrice);
    formData.append("orderDetail", JSON.stringify(input.orderDetail));
    formData.append("slipURL", input.image);
    // // setLoading(true);

    createOrder(formData)
      .then(() => {
        navigate("/order");
      })
      .catch((err) => {
        alert(err.response.data.message);
        // setLoading(false);
      });
  };

  return (
    <div className=" bg-pink-200 min-h-screen">
      <div>
        <div className="btn  btn-ghost text-2xl m-4 y-2 font-semibold">
          <button onClick={() => navigate("/cart")}> &lt; Payment</button>
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="bg-white p-4 rounded-md">
          <div>
            <div className="text-2xl font-semibold">Transfer</div>
            <div>
              <span className="font-semibold">Name :</span> John Doe
            </div>
            <div>
              {" "}
              <span className="font-semibold">Bank Name :</span> Thai Bank
            </div>
            <div>
              {" "}
              <span className="font-semibold">Account No.</span> 123-456789-0
            </div>
          </div>
          <div className="mt-4">
            <div className="text-xl font-semibold">QRcode</div>
            <div className="p-2">
              <img src={QRcode} alt="Qrcode" width={400} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md">
          <form>
            <div className="mb-4">
              <label className="text-xl text-gray-500 font-semibold">
                upload slip image
              </label>
            </div>
            <input type="file" name="image" onChange={handleChangeImage} />
            {image ? (
              <div className="p-4">
                <img
                  src={URL.createObjectURL(image)}
                  alt="product"
                  width={400}
                />
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
      <div className="flex justify-end m-4 y-2">
        <button
          className="btn btn-warning btn-wide text-2xl hover:bg-yellow-200 font-semibold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
