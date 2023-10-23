import { useNavigate } from "react-router-dom";
import { ADMIN, getRole } from "../utils/local-storage";
import useAuth from "../hooks/use-auth";
import { CartIcon } from "../icons";

export default function Header() {
  const navigate = useNavigate();
  const { authUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar bg-yellow-400 bg-opacity-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          {getRole() === ADMIN ? (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => navigate("/product/create")}>
                <a>Create Product</a>
              </li>
              <li onClick={() => navigate("/product/edit")}>
                <a>Edit Product</a>
              </li>
              <li onClick={() => navigate("/product")}>
                <a>Product</a>
              </li>
              <li onClick={() => navigate("/order/edit")}>
                <a>Edit Order</a>
              </li>
              <li onClick={() => navigate("/order")}>
                <a>Order</a>
              </li>
            </ul>
          ) : (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => navigate("/product")}>
                <a>Product</a>
              </li>

              <li onClick={() => navigate("/order")}>
                <a>Order</a>
              </li>
            </ul>
          )}
        </div>
        <div>
          <a className="btn btn-ghost normal-case text-xl">GATLANG</a>
        </div>
      </div>
      <div className="navbar-center">
        {authUser ? authUser?.username.toLocaleUpperCase() : "GUEST"}
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <CartIcon />
        </button>
        <button
          type="button"
          className="text-white font-semibold rounded-full py-3 px-6 bg-orange-400 hover:bg-orange-400 hover:bg-opacity-50 hover:text-black"
          onClick={handleLogOut}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}
