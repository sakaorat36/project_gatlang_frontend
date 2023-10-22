import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/use-auth";

export default function Header() {
  const navigate = useNavigate();

  const { authUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <header>
      <div className="flex flex-row bg-yellow-400 bg-opacity-50">
        <div
          className="basis-1/2 p-2 m-1 flex flex-col justify-center font-extrabold"
          onClick={() => navigate("/")}
        >
          <div>GATLANG</div>
          <div>ice-cream</div>
        </div>
        <div className="basis-1/2 p-1 m-1 flex justify-around items-center cursor-pointer">
          <div className="font-semibold">
            {authUser ? authUser?.username.toLocaleUpperCase() : "GUEST"}
          </div>
          <div className="cart">
            <i className="fa fa-shopping-cart cursor-pointer"></i>
          </div>
          <div>
            <button
              type="button"
              className="text-white font-semibold rounded-full py-3 px-6 bg-orange-400 hover:bg-orange-400 hover:bg-opacity-50 hover:text-black"
              onClick={handleLogOut}
            >
              LOG OUT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
