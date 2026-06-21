
import {Link} from "react-router-dom";

import "./index.css";

const NotFound = () => (
  <div className="notfound-container">
    <div className="notfound-content">
      <h1 className="notfound-heading">
        404
      </h1>

      <p className="notfound-text">
        Page not found
      </p>

      <Link
        to="/"
        className="back-dashboard-link"
      >
        Back to dashboard
      </Link>
    </div>
  </div>
);

export default NotFound;