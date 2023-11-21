import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import { addRole } from "../../utils/local-storage";

export default function RedirectIfAuthen({ children }) {
  const { authUser } = useAuth();

  if (authUser?.role) {
    addRole(authUser.role);

    if (authUser?.role === "USER") {
      return <Navigate to="/product" />;
    }

    if (authUser?.role === "ADMIN") {
      return <Navigate to="/order/edit" />;
    }
  }

  return children;
}
