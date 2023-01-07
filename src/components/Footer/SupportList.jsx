import React from 'react'

export default function SupportList() {
  return (
    <div className="support">
      <h3>Support</h3>
      <div className="support-list">
        <div className="support-list-item">
          <a href="/faq" className="support-list-item-link">
            FAQ
          </a>
        </div>
        <div className="support-list-item">
          <a href="/privacy-policy" className="support-list-item-link">
            Privacy Policy
          </a>
        </div>
        <div className="support-list-item">
          <a href="/terms-and-conditions" className="support-list-item-link">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
}
