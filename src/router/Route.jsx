import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { getRole, ADMIN } from "../utils/local-storage";
import Authenticated from "../features/auth/Authenticated";
import RedirectIfAuthen from "../features/auth/RedirectIfAuthen";
import Layout from "../layouts/Layout";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import CartPage from "../pages/CartPage";
import PaymentPage from "../pages/PaymentPage";
import RegisterPage from "../pages/RegisterPage";
import CreateProductPage from "../pages/CreateProductPage";
import EditProductPage from "../pages/EditProductPage";
import EditOrderPage from "../pages/EditOrderPage";
import OrderPage from "../pages/OrderPage";
import NotAuthorized from "../pages/NotAuthorized";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "",
    element: <Homepage />,
  },
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      {
        path: "order",
        element: <OrderPage />,
      },
      // {
      //   path: "order/edit",
      //   element: getRole() === ADMIN ? <EditOrderPage /> : <NotAuthorized />,
      // },
      {
        path: "order/edit",
        element: <EditOrderPage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "product/create",
        element:
          getRole() === ADMIN ? <CreateProductPage /> : <NotAuthorized />,
      },
      {
        path: "product/edit",
        element: getRole() === ADMIN ? <EditProductPage /> : <NotAuthorized />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthen>
        <LoginPage />,
      </RedirectIfAuthen>
    ),
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
