import { useState } from "react";
import useProduct from "../hooks/use-product";
// import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

export default function CreateProductPage() {
  const [input, setInput] = useState({
    name: "",
    image: "",
    amount: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const { createProduct } = useProduct();

  const navigate = useNavigate();

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    setInput({ ...input, image: e.target.files[0] });
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("image", input.image);
    formData.append("amount", input.amount);
    formData.append("price", input.price);

    setLoading(true);

    createProduct(formData)
      .then(() => {
        navigate("/product/edit");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="flex flex-row bg-pink-200 min-h-screen">
        {!isLoading ? <div>Not Loading</div> : <div>Loading ...</div>}
        <div className="basis-1/2 pt-10 flex flex-col items-center min-[900px]:pt-[10.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
          <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-2">
                <label className="font-semibold">Product Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="ice-cream name"
                  className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="grid gap-4 mb-2">
                <label className="font-semibold">Image</label>
                <input
                  type="file"
                  name="image"
                  placeholder="upload product image"
                  onChange={handleChangeImage}
                  className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                />
              </div>
              <div className="grid gap-4 mb-2">
                <label className="font-semibold">Amount</label>
                <input
                  type="number"
                  name="amount"
                  min={0}
                  className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="grid gap-4">
                <label className="font-semibold">Price</label>
                <input
                  type="number"
                  name="price"
                  min={0}
                  className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="text-center justify-center py-4">
                <button className="btn btn-warning bg-orange-400 text-2xl hover:bg-orange-300 font-semibold text-white hover:text-black">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="basis-1/2">
          {image ? <img src={URL.createObjectURL(image)} alt="product" /> : ""}
        </div>
      </div>
    </div>
  );
}
