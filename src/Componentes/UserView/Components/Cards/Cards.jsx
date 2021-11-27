import React from "react";
import { CardPost } from "./CardPost";

export const Cards = ({ results }) => {
  return (
    <div className="container">
      <ul className="cards">
        {results.map((p) => (
          <li className="card-item" key={p.name}>
            <CardPost url={p.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};
