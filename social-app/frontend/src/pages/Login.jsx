import LoginForm from "../components/LoginForm";
import loginImage from "../assets/images/login.jpg";

const Login = () => {
  return (
    <section className="container">
      <h1 className="text-center my-3">Login</h1>
      <div className="row box py-5">
        <div className="col-md-6 mb-2">
          <img src={loginImage} className="img-fluid" alt="Login image" />
        </div>
        <div className="col-md-6">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
