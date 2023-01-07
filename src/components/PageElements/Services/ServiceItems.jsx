import React from "react";
import { services } from "../../../data/services_data";
import "../../../styles/services.css";

export default function ServiceItems() {
  return (
    <div className="services-wrapper">
      <div className="services-item">
        {services.map((data, key) => {
          return (
            <div className="content" key={key}>
              <h2 className="title">{data.service}</h2>
              {data.icon}
              <p className="text">{data.explanation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
