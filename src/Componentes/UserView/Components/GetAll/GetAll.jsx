import React, { useState } from "react";
import { UseFetch } from "../UseFetch";
import { Cards } from "../Cards/Cards";

const Getall = () => {
  const [url, setUrl] = useState("http://localhost:3000/api/v1/post/all");
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  cargando ? console.log("cargando") : console.log(data.active);

  return (
    <div>
      <h1>BIENVENIDO</h1>
      {cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          <Cards results={data.results} />

          <div className="container">
            <button
              onClick={() => setUrl(data.previous)}
              className="m-2 btn btn-dark"
            >
              {" "}
              Anterior{" "}
            </button>
            <button
              onClick={() => setUrl(data.next)}
              className="m-2 btn btn-dark"
            >
              {" "}
              Siguiente{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Getall;
