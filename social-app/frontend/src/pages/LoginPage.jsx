import loginImg from "../assets/images/login.jpg";
import LoginForm from "../components/LoginForm";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../router/routes";

function LoginPage() {
  return (
    <section className="container mt-3">
      <div className="row box py-5">
        <div className="col-md-6">
          <img className="img-fluid h-100" src={loginImg} alt="" />
        </div>
        <div className="col-md-6">
          <div className="text-uppercase text-center lh-1 m-0 py-2 box">
            <h1>Login</h1>
          </div>
          <div className="box my-4 text-center px-5">
            <p className="lh-1">
              Please Login to create your own memories and like others memories.
            </p>
          </div>
          <LoginForm />
          <div className="box mt-4 text-center px-5">
            <p className="lh-1">Dont have account?</p>
            <Link to={routes.REGISTER.path}>Click here to Register</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
