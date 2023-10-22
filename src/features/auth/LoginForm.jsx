import { useState } from "react";
import useAuth from "../../hooks/use-auth";

export default function LoginForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input).catch((err) => {
      alert(err.response.data.message);
    });
  };
  return (
    <form className="grid gap-4" onSubmit={handleSubmitForm}>
      <div>
        <label className="font-semibold">Username</label>
        <input
          type="text"
          className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500"
          value={input.username}
          onChange={(e) => setInput({ ...input, username: e.target.value })}
        />
      </div>
      <div>
        <label className="font-semibold">Password</label>
        <input
          type="password"
          className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
      </div>

      <div>
        <button className="bg-orange-400 text-white w-full rounded-md text-xl font-bold py-2.5  hover:bg-orange-300">
          Log in
        </button>
      </div>
    </form>
  );
}
