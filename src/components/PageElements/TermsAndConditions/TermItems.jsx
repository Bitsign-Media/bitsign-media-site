import React from "react";
import { termsAndConditions } from "../../../data/terms_and_conditions_data";
import "../../../styles/terms.css";

export default function TermItems() {
  return (
    <div className="terms-items">
      {termsAndConditions.map((data, key) => {
        return (
          <div className="term-item" key={key}>
            <h2 className="title">{data.title}</h2>
            <p className="text">{data.explanation}</p>
          </div>
        );
      })}
    </div>
  );
}
