function TeamSuperhero(props) {

  const { alias, image } = props.superhero.fields;

  return (
    <div id="create-team-superhero-card">
      <img src={image} alt="Superhero"></img>
      <h3>{alias}</h3>
      <button id="create-team-add">Add</button>
    </div>
  );
}

export default TeamSuperhero;