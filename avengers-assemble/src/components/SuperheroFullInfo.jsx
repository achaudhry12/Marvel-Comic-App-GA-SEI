function SuperheroFullInfo(props) {

  const { alias, image, origin, powers, description } = props.superheros.fields;

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