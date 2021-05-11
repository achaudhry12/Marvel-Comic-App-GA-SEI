function TeamSuperhero(props) {

  const { alias, image } = props.superhero.fields;

  return (
    <div id="superhero-card">
      <img src={image} alt="Superhero"></img>
      <h3>{alias}</h3>
      <button>Add</button>
    </div>
  );
}

export default TeamSuperhero;