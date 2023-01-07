import React from "react";
import { policies } from "../../../data/privacy_data.js";
import "../../../styles/privacy.css";

export default function Policies() {
  return (
    <div className="policies">
      {policies.map((data, key) => {
        return (
          <div className="policy" key={key}>
            <h2 className="title">{data.title}</h2>
            <p className="text">{data.explanation}</p>
            {data.list ? (
              <ul className="list">
                {data.list?.map((listItem, key) =>
                  Object.values(listItem).map((item, innerKey) => (
                    <li className="list-item" key={`${innerKey}`}>
                      {item}
                    </li>
                  ))
                )}
              </ul>
            ) : null}
            <p className="text">{data?.explanation_followed}</p>
          </div>
        );
      })}
    </div>
  );
}
