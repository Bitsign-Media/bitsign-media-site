import React from "react";
import { contactInfo } from "../../data/contact_data.js";

export default function ReachOut() {
  const mailto_email = `mailto: ${contactInfo[0].value}`;
  return (
    <div className="container-body-contact">
      <h3>Reach out to us</h3>
      <a className="contact-email" href={mailto_email}>
        {contactInfo[0].value}
      </a>
    </div>
  );
}
