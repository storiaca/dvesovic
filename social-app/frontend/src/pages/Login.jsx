import loginImg from "../assets/images/login.jpg";

import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <section className="container mt-3">
      <div className="row box py-5">
        <div className="col-md-6">
          <img className="img-fluid" src={loginImg} alt="" />
        </div>
        <div className="col-md-6">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default Login;
