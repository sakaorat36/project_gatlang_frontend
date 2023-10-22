import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import Loading from "../../components/Loading";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [isLoading, setLoading] = useState(false);
  const { register } = useAuth();

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setLoading(true);

    register(input)
      .then(() => {
        setLoading(false);
        navigate("/product");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <>
      {!isLoading ? (
        <div className="basis-1/2  pt-10 flex flex-col items-center min-[900px]:pt-[15.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
          <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
            <form onSubmit={handleSubmitForm}>
              <div className="grid grid-cols-2 mb-3 gap-4">
                <div className="mb-4">
                  <label className="font-semibold">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                    value={input.username}
                    onChange={handleChangeInput}
                  />
                </div>

                <div className="mb-4">
                  <label className="font-semibold">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                    value={input.password}
                    onChange={handleChangeInput}
                  />
                </div>

                <div className="mb-4">
                  <label className="font-semibold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                    value={input.firstName}
                    onChange={handleChangeInput}
                  />
                </div>

                <div className="mb-4">
                  <label className="font-semibold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                    value={input.lastName}
                    onChange={handleChangeInput}
                  />
                </div>

                <div className="mb-4">
                  <label className="font-semibold">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                    value={input.email}
                    onChange={handleChangeInput}
                  />
                </div>

                <div className="mb-4">
                  <label className="font-semibold">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                    value={input.mobile}
                    onChange={handleChangeInput}
                  />
                </div>
              </div>
              <div>
                <button className=" bg-orange-400 text-white w-full rounded-md text-xl font-bold py-2.5 hover:bg-orange-300">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="basis-1/2">
          <div className="h-screen bg-white">
            <div className="flex justify-center items-center h-full">
              <Loading />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
