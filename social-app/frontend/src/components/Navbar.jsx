import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { routes } from "../router/routes";
import logo from "../assets/images/logo.png";

const style = {
  width: "50px",
  height: "50px",
};
function Navbar() {
  const { user } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                <button
                  className="nav-link"
                  onClick={() => {
                    dispatch(logout());
                    navigate(routes.LOGIN.path);
                  }}
                >
                  LOG OUT
                </button>
              </li>
              <li className="nav-item">
                <Link to={"/"}>
                  <img
                    style={style}
                    src={user.image}
                    className="rounded-circle object-fit-cover"
                    alt=""
                  />
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
