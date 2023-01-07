import React from "react";
import { Link } from "react-router-dom";

export default function SupportList() {
  return (
    <div className="support">
      <h3>Support</h3>
      <div className="support-list">
        <div className="support-list-item">
          <Link className="support-list-item-link" to="/faq">
            FAQ
          </Link>
        </div>
        <div className="support-list-item">
          <Link className="support-list-item-link" to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
        <div className="support-list-item">
          <Link className="support-list-item-link" to="/terms-and-conditions">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
