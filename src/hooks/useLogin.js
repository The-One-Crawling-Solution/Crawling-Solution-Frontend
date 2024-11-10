import { useState } from "react";
import { fetchLogin } from "../service/LoginService";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchLogin(email, password);
      const token = response?.data?.token;
      if (token) {
        localStorage.setItem("authToken", token); // Store token for future use
      }
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
