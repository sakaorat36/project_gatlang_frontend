import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
  removeRole,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (getAccessToken()) {
      axios.get("auth/me").then((res) => {
        setAuthUser(res.data.user);
      });
    }
  }, []);

  const login = async (loginInput) => {
    const res = await axios.post("/auth/login", loginInput);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const register = async (registerInput) => {
    const res = await axios.post("/auth/register", registerInput);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    removeRole();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, register, logout, authUser }}>
      {children}
    </AuthContext.Provider>
  );
}
