import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Superhero from "./Superhero";


function SuperheroDatabase() {
  const [superheros, setSuperheros] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchSuperheros = async () => {
      const resp = await axios.get(baseURL, config);
      setSuperheros(resp.data.records);
    };
    fetchSuperheros();
  }, [toggleFetch]);

  return (
    <div>
      <h1 id="superhero-database-title">Superhero Database</h1>
      <main>
          {superheros.map((superhero) => (
            <Superhero
              superheros={superhero}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </main>
    </div>
  );
}

export default SuperheroDatabase;