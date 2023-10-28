import { useNavigate } from "react-router-dom";
export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(/img/bgImage.png)`,
      }}
    >
      <div className=" absolute flex flex-row space-x-2 top-[700px] left-[205px] gap-20">
        <div
          className="rounded-full bg-yellow-400 hover:bg-yellow-300 cursor-pointer px-4 text-4xl py-4 font-semibold"
          onClick={() => navigate("/register")}
        >
          Register
        </div>
        <div
          className="rounded-full bg-white hover:bg-gray-100 cursor-pointer  text-4xl font-semibold py-4 px-4"
          onClick={() => navigate("/login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}
