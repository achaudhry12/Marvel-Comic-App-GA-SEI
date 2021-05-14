function TeamSuperhero(props) {
  const { alias, image } = props.superhero.fields;

  return (
    <div id="create-team-superhero-card">
      <div className="reframe-superhero-image">
        <img src={image} alt="Superhero" id="create-team-superhero"></img>
      </div>
      <h3 id="create-team-alias">{alias}</h3>
      <button id="create-team-add">Add</button>
    </div>
  );
}

export default TeamSuperhero;
