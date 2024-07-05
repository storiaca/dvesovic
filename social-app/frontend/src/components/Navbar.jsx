import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="container navbar navbar-expand box px-3 mt-3">
      <a className="navbar-brand" href="">
        <img
          style={{ height: "30px" }}
          className="d-inline-block align-text-top"
          src={logo}
          alt=""
        />
      </a>
    </nav>
  );
}

export default Navbar;
