import { useParams } from "react-router-dom";

function SuperheroFullInfo({ superheros }) {
  
  const {id} = useParams();

  const hero = superheros.find((hero) => {
    return hero.id === id
  });

  const { alias, image, origin, powers, description } = hero.fields

  return (
    <div id="create-team-superhero-card">
      <img src={image} alt="Superhero"></img>
      <p>{alias}</p>
      <p>{origin}</p>
      <p>{powers}</p>
      <p>{description}</p>
    </div>
  );
}

export default SuperheroFullInfo;
