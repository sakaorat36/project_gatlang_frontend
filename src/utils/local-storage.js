const ACCESS_TOKEN = "ACCESS_TOKEN";
const ROLE = "ROLE";

/* VARIABLE */
export const ADMIN = "ADMIN";

/* ACCESS TOKEN */
export const addAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token); // add token
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN); // read accesstoken from localstorage
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN); // delete accesstoken from localstorage

/* ROLE */
export const addRole = (role) => localStorage.setItem(ROLE, role);
export const getRole = () => localStorage.getItem(ROLE);
