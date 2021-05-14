import { useState } from "react";
import { Link } from "react-router-dom";
import Superhero from "./Superhero";

function SuperheroDatabase({ superheros, setToggleFetch }) {
  const [findHero, setFindHero] = useState("");
  const matchingHeros = superheros.filter((superhero) =>
    superhero.fields.alias.toLowerCase().includes(findHero.toLowerCase())
  );

  return (
    <div id="superhero-database">
      <h1 id="superhero-database-title">Superhero Database</h1>
      <div id="superhero-database-search">
        <div id="search-bar-background">
        <input
          id="search-bar"
          type="text"
          placeholder="Search Superhero"
          value={findHero}
          onChange={(e) => setFindHero(e.target.value)}
        />
        </div>
        {findHero && (
          <div id="superhero-search-results">
            {matchingHeros.map((superhero) => (
              <div>
                {
                  <Superhero
                    superhero={superhero}
                    setToggleFetch={setToggleFetch}
                  />
                }
              </div>
            ))}
          </div>
        )}
      </div>
      <h1>OR</h1>
      <div id="superhero-database-full">
        <Link to="/superhero-database-full">Full Database</Link>
      </div>
    </div>
  );
}

export default SuperheroDatabase;
