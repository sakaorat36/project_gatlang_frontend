import { useState } from "react";
import useAuth from "../../hooks/use-auth";
import Loading from "../../components/Loading";

export default function LoginForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setLoading] = useState(false);
  const { login } = useAuth();

  const loadingMessage = "LOGGING IN ...";

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setLoading(true);

    login(input)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      {!isLoading ? (
        <div className="basis-1/2 pt-10 flex flex-col items-center min-[900px]:pt-[18.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
          <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
            <form className="grid gap-4" onSubmit={handleSubmitForm}>
              <div>
                <label className="font-semibold">Username</label>
                <input
                  type="text"
                  className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                  value={input.username}
                  onChange={(e) =>
                    setInput({ ...input, username: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="font-semibold">Password</label>
                <input
                  type="password"
                  className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
                  value={input.password}
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                />
              </div>

              <div>
                <button className="bg-orange-400 text-white w-full rounded-md text-xl font-bold py-2.5  hover:bg-orange-300">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="basis-1/2 min-h-screen">
          <div className="h-screen bg-white">
            <div className="flex justify-center items-center h-full">
              <Loading message={loadingMessage} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
