import React from "react";
import { CardPost } from "./CardPost";
import "./Cards.css";

export const Cards = ({ results }) => {
  return (
    <div className="container">
      <ul className="cards">
        {results.map((p) => (
          <li className="card-item" key={p._id}>
            <CardPost url={p.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};
