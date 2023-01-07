import React from "react";
import { questions } from "../../../data/faq_data.js";

export default function FAQItems() {
  return (
    <div className="faq-items">
      {questions.map((data, key) => {
        return (
          <div className="faq-item" key={key}>
            <h2 className="question">{data.question}</h2>
            <p className="answer">{data.answer}</p>
          </div>
        );
      })}
    </div>
  );
}
