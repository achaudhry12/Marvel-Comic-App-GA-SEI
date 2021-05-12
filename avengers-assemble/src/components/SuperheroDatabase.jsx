import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Superhero from "./Superhero";
import SuperheroFullInfo from "./SuperheroFullInfo"
import { Route } from "react-router-dom";


function SuperheroDatabase({superheros, setToggleFetch}) {
  return (
    <div>
      <h1 id="superhero-database-title">Superhero Database</h1>
      <main id="superhero-database-container">
          {superheros.map((superhero) => (
            <Superhero
              superhero={superhero}
              setToggleFetch={setToggleFetch}
            />
          ))}
      </main>
      <Route path="/superhero-full-info">
        <SuperheroFullInfo superheros={superheros} />
      </Route>
    </div>
  );
}

export default SuperheroDatabase;