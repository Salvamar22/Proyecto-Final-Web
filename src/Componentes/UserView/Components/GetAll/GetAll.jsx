import React, { useState } from "react";
import { UseFetch } from "../UseFetch";
import { Cards } from "../Cards/Cards";

const Getall = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  cargando ? console.log("cargando") : console.log(data.results);

  return (
    <div>
      <h1>BIENVENIDO</h1>
      {cargando ? <h1>Cargando...</h1> : <Cards results={data.results} />}
    </div>
  );
};

export default Getall;
