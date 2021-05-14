import { useState } from "react";
import Superhero from "./Superhero";

function SuperheroDatabase({ superheros, setToggleFetch }) {
  const [findCountry, setFindCountry] = useState("");

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
    </div>
  );
}

export default SuperheroDatabase;
