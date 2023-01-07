import React from "react";
import { contactInfo } from "../../../data/contact_data.js";
import "../../../styles/contact.css";

export default function ContactItems() {
  return (
    <div className="contact-info">
      {contactInfo.map((data, key) => {
        return (
          <div className="contact-info-item" key={key}>
            <a href={data.url}>
              <data.icon />
              <span className="contact-info-text">{data.value}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
}
