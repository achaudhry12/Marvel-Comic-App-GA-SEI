import { useParams } from "react-router-dom";

function SuperheroFullInfo({ superheros }) {
  const { id } = useParams();

  const hero = superheros.find((hero) => {
    return hero.id === id;
  });

  const { alias, image, real_name, origin, powers, description } = hero.fields;

  return (
    <div id="superhero-full-info">
      <img id="full-info-image" src={image} alt="Superhero"></img>
      <p id="full-info-alias">{alias}</p>
      <p id="full-info-real-name-tag">Real Name: </p>
      <p id="full-info-real-name">{real_name}</p>
      <p id="full-info-origin-tag">Origin: </p>
      <p id="full-info-origin">{origin}</p>
      <p id="full-info-description-tag">Description: </p>
      <p id="full-info-description">{description}</p>
      <p id="full-info-powers-tag">Powers: </p>
      <p id="full-info-powers">{powers}</p>
    </div>
  );
}

export default SuperheroFullInfo;
