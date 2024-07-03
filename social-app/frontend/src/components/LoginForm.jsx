import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../services/Auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Auth.login(inputData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/posts", { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form>
        <input
          className="form-control"
          type="text"
          name="email"
          placeholder="E-mail"
          onInput={inputHandler}
          value={inputData.email}
        />
        <input
          className="form-control mt-3"
          type="password"
          name="password"
          placeholder="Password"
          onInput={inputHandler}
          value={inputData.password}
        />
        <button onClick={handleSubmit} className="btn btn-primary mt-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
