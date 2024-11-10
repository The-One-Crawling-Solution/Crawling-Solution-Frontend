// services/AuthService.js
import { API_BASE_URL, getFetchOptions } from "../utils/api";

export const fetchLogin = async (email, password) => {
  const payload = { email, password };
  const response = await fetch(
    `${API_BASE_URL}/login`,
    getFetchOptions("POST", payload)
  );

  if (!response.ok) {
    throw new Error("Login failed. Please check your credentials.");
  }

  const data = await response.json();
  return data;
};
