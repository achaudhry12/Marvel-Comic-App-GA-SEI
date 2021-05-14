import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";

function Superhero(props) {
  const deleteSuperhero = async () => {
    const specificURL = `${baseURL}/${props.superhero.id}`;
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  const { alias, image, real_name, origin } = props.superhero.fields;

  return (
    <div id="superhero-card">
      <div className="reframe-superhero-image">
        <img src={image} alt="Superhero" id="superhero-card-image"></img>
      </div>
      <p id="superhero-card-alias">{alias}</p>
      <p id="superhero-card-real-name">{real_name}</p>
      <p id="superhero-card-origin">{origin}</p>
      <Link
        id="superhero-card-more-info"
        to={`/superhero-full-info/${props.superhero.id}`}
      >
        <button id="superhero-database-more-info">More Info</button>
      </Link>
      <button id="superhero-database-delete" onClick={deleteSuperhero}>
        Remove
      </button>
    </div>
  );
}

export default Superhero;
