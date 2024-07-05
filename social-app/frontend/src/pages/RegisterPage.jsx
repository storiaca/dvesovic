import { Link } from "react-router-dom";
import { routes } from "../router/routes";
import RegisterForm from "../components/RegisterForm";

import registerImg from "../assets/images/register.png";

function RegisterPage(props) {
  return (
    <section className="container mt-3">
      <div className="row box py-5">
        <div className="col-md-6">
          <img className="img-fluid h-100" src={registerImg} alt="" />
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
          <RegisterForm />
          <div className="box mt-4 text-center px-5">
            <p className="lh-1">Dont have account?</p>
            <Link to={routes.LOGIN.path}>Click here to Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
