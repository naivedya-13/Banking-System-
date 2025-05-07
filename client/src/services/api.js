import axios from "axios";

// const API_BASE = "http://localhost:5000/api";
const API_BASE = "https://banking-system-bza5-ft4cfe7i2-naivedya13s-projects.vercel.app/api";

const api = axios.create({
  baseURL: API_BASE,
});

export const setAuthToken = (token) => {
  if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete api.defaults.headers.common["Authorization"];
};

// Auth
export const register = (data) => api.post("/auth/register", data);
export const login = (data) => api.post("/auth/login", data);
export const logout = () => api.post("/auth/logout");

// Customer
export const getAccounts = () => api.get("/customer/accounts");
export const getAccountTransactions = (accountId) =>
  api.get(`/customer/accounts/${accountId}/transactions`);
export const deposit = (accountId, data) =>
  api.post(`/customer/accounts/${accountId}/deposit`, data);
export const withdraw = (accountId, data) =>
  api.post(`/customer/accounts/${accountId}/withdraw`, data);

// Banker
export const getAllCustomers = () => api.get("/banker/customers");
export const getAllAccounts = () => api.get("/banker/accounts");
export const getBankerAccountTransactions = (accountId) =>
  api.get(`/banker/accounts/${accountId}/transactions`);

export default api;
