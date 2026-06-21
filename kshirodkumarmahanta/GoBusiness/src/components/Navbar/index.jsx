
import {Link, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

import "./index.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="logo-link"
        aria-label="Go to dashboard home"
      >
        Go Business
      </Link>

      <div className="nav-right">
        <nav aria-label="Primary">
          <Link
            to="/"
            className="home-link"
          >
            Home
          </Link>
        </nav>

        <button
          type="button"
          className="logout-btn"
          onClick={onClickLogout}
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;