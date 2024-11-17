import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await login(email, password);
      setMessage(response?.message || "Login successful!");
      navigate("/addblog");
    } catch (err) {
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="container login-container my-5">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-6 col-lg-4">
          <div className="login-box">
            <h2 className="text-center">Login</h2>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-main w-100 mt-4"
                disabled={loading}
              >
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Login"
                )}
              </button>
              {message && <p className="mt-3">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
