import React from "react";
import { contactInfo } from "../../data/contact_data";
import "../../styles/footer.css";

export default function Socials() {
  return (
    <div className="socials">
      {contactInfo.map((data, key) => {
        return (
          <div className="social-item" key={key}>
            <a href={data.url}>
              <data.icon />
            </a>
          </div>
        );
      })}
    </div>
  );
}
