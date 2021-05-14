import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [alias, setAlias] = useState("");
  const [image, setImage] = useState("");
  const [real_name, setReal_name] = useState("");
  const [origin, setOrigin] = useState("");
  const [powers, setPowers] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (params.id && props.superheros.length) {
      const superhero = props.superheros.find(
        (superhero) => superhero.id === params.id
      );
      if (superhero) {
        setAlias(superhero.fields.alias);
        setImage(superhero.fields.image);
        setReal_name(superhero.fields.real_name);
        setOrigin(superhero.fields.origin);
        setPowers(superhero.fields.powers);
        setDescription(superhero.fields.description);
      }
    }
  }, [props.superheros, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSuperhero = {
      alias,
      image,
      real_name,
      origin,
      powers,
      description,
    };
    if (params.id) {
      const specificURL = `${baseURL}/${params.id}`;
      await axios.put(specificURL, { fields: newSuperhero }, config);
    } else {
      await axios.post(baseURL, { fields: newSuperhero }, config);
    }
    props.setToggleFetch((curr) => !curr);
    history.push("/superhero-database-full");
  };

  return (
    <div id="form-container">
      <div id="make-your-own">
        <p id="make-your-own-title">Make Your Own Superhero!</p>
        <form id="make-your-own-form" onSubmit={handleSubmit}>
          <label htmlFor="alias">Alias: </label>
          <input
            type="text"
            id="form-alias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
          <label htmlFor="image">Image URL: </label>
          <input
            type="text"
            id="form-image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="real_name">Real Name: </label>
          <input
            type="text"
            id="form-real-name"
            value={real_name}
            onChange={(e) => setReal_name(e.target.value)}
          />
          <label htmlFor="origin">Origin: </label>
          <input
            type="text"
            id="form-origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <label htmlFor="powers">Powers: </label>
          <textarea
            type="text"
            id="form-powers"
            value={powers}
            onChange={(e) => setPowers(e.target.value)}
          />
          <label htmlFor="description">Description: </label>
          <textarea
            type="text"
            id="form-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button id="make-your-own-button" type="submit">
            Create
          </button>
        </form>
      </div>
      <div id="superhero-card-div">
      <div id="superhero-card">
        <div className="reframe-superhero-image">
          <img src={image} alt="Superhero" id="superhero-card-image"></img>
        </div>
        <p id="superhero-card-alias">{alias}</p>
        <p id="superhero-card-real-name">{real_name}</p>
        <p id="superhero-card-origin">{origin}</p>
      </div>
      </div>
    </div>
  );
}

export default Form;
