import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuth() {
  // const ctx = useContext(AuthContext);
  // console.log("xxxx", ctx);
  return useContext(AuthContext);
}
