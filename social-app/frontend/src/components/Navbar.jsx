import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "../router/routes";
import logo from "../assets/images/logo.png";

function Navbar() {
  const { user } = useSelector((state) => state.userStore);
  return (
    <nav className="container navbar navbar-expand box px-3 mt-3">
      <Link className="navbar-brand" to={routes.POSTS.path}>
        <img
          style={{ height: "30px" }}
          className="d-inline-block align-text-top"
          src={logo}
          alt=""
        />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
          {user ? (
            <>
              <li className="nav-item">
                <NavLink to={routes.POSTS.path} className="nav-link">
                  POSTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={""} className="nav-link">
                  MEMBER
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to={""} className="nav-link">
                  LOG OUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to={""} className="nav-link">
                  {/* to account */}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to={routes.REGISTER.path} className="nav-link">
                  REGISTER
                </Link>
              </li>
              <li className="nav-item">
                <Link to={routes.LOGIN.path} className="nav-link">
                  LOGIN
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
