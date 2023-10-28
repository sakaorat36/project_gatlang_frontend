import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN, getRole } from "../utils/local-storage";
import { CartIcon } from "../icons";
import useAuth from "../hooks/use-auth";

export default function Header() {
  const navigate = useNavigate();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { authUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="navbar bg-yellow-400 bg-opacity-50">
      <div className="navbar-start">
        <div className="drawer">
          {/* toggle btn */}
          <input
            id="menu-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={isDrawerOpen}
            onChange={toggleDrawer}
          />

          <div className="drawer-content">
            <label
              htmlFor="menu-drawer"
              className="btn btn-ghost btn-circle hover:bg-orange-400 hover:bg-opacity-50 drawer-button hover:text-white"
            >
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
            <span
              className="btn btn-ghost normal-case text-xl hover:bg-transparent hover:text-white"
              onClick={() => navigate("/product")}
            >
              GATLANG
            </span>
          </div>

          <div className="drawer-side z-10">
            <label
              htmlFor="menu-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            />

            {getRole() === ADMIN ? (
              <ul
                className="menu p-4 w-80 min-h-full bg-base-200 text-base-content font-semibold "
                onClick={toggleDrawer}
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
                className="menu p-4 w-80 min-h-full bg-base-200 text-base-content font-semibold "
                onClick={toggleDrawer}
              >
                <li
                  onClick={() => {
                    navigate("/product");
                  }}
                >
                  <a>Product</a>
                </li>

                <li onClick={() => navigate("/order")}>
                  <a>Order</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <span className="font-semibold">
          Welcome {authUser ? authUser?.username.toLocaleUpperCase() : "GUEST"}
        </span>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle hover:bg-orange-400 hover:bg-opacity-50 hover:text-white mr-4">
          <CartIcon />
        </button>
        <button
          type="button"
          className="text-white font-semibold rounded-full py-3 px-6 bg-orange-400 hover:bg-orange-400 hover:bg-opacity-50 hover:text-white mr-4"
          onClick={handleLogOut}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}
