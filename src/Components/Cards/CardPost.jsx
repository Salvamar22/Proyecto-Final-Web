import React from "react";
import { UseFetch } from "../UseFetch";

export const CardPost = ({ url }) => {
  const estado = UseFetch(url);
  const { cargando, data } = estado;

  return (
    <div>
      {cargando ? (
        <h1>Cargando</h1>
      ) : (
        <div className="card" style={{ width: "40rem" }}>
          <div className="card-header">
            <h5 className="card-title">{data.title}</h5>
          </div>

          <div className="card-body">
            <img src={data.image} alt="post" width="200rem" />
          </div>

          <div className="card-footer">
            <p className="card-text text-capitalize">{data.description}</p>
            <button className="m-2 btn btn-dark">like</button>
            <button className="m-2 btn btn-dark">Favoritos</button>
            <button className="m-2 btn btn-dark"> Ver comentarios</button>
          </div>
        </div>
      )}
    </div>
  );
};
