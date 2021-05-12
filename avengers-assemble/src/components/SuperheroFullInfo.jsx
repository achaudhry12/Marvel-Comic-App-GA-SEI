import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function SuperheroFullInfo(props) {
  const [superheros, setSuperheros] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchSuperheros = async () => {
      const resp = await axios.get(baseURL, config);
      setSuperheros(resp.data.records);
    };
    fetchSuperheros();
  }, [toggleFetch]);

  const { alias, image } = props.superheros.fields;

  return (
    <div id="create-team-superhero-card">
      <img src={image} alt="Superhero"></img>
      <h3>{alias}</h3>
      <button id="create-team-add">Add</button>
    </div>
  );
}

export default SuperheroFullInfo;