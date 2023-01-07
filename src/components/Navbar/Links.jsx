import "../../styles/links.css";

import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links">
      <div className="links-wrapper">
        <div className="links-list">
          <div className="links-list-item">
            <Link className="links-list-item-link" to="/">
              Home
            </Link>
          </div>
          <div className="links-list-item">
            <Link className="links-list-item-link" to="/services">
              Services
            </Link>
          </div>
          <div className="links-list-item">
            <Link className="links-list-item-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
