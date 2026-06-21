

import {useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken) {
    return <Navigate to="/" replace />;
  }

  const onChangeEmail = event => {
    setEmail(event.target.value);
    setErrorMsg("");
  };

  const onChangePassword = event => {
    setPassword(event.target.value);
    setErrorMsg("");
  };

  const submitForm = async event => {
    event.preventDefault();

    if (
      email.trim() === "" ||
      password.trim() === ""
    ) {
      setErrorMsg(
        "Email and password are required"
      );
      return;
    }

    try {
      const response = await axios.post(
        "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin",
        {
          email,
          password,
        }
      );

      const token =
        response.data.data.token;

      Cookies.set(
        "jwt_token",
        token,
        {
          expires: 7,
        }
      );

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      setErrorMsg(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="logo">
          Go Business
        </h1>

        <p className="description">
          Sign in to open your referral
          dashboard.
        </p>

        <form
          onSubmit={submitForm}
          className="login-form"
        >
          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={onChangeEmail}
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={
              onChangePassword
            }
          />

          

          <button
            type="submit"
            className="signin-btn"
          >
            Sign in
          </button>

          {errorMsg && (
            <p className="error-msg">
              {errorMsg}
            </p>
          )}

        </form>
      </div>
    </div>
  );
};

export default Login;