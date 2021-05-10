function Superhero(props) {

  const { alias, image, real_name, origin } = props.superhero.fields;

  return (
    <div id="superhero-card">
      <img alt="hero">{image}</img>
      <h3>{alias}</h3>
      <h4>{real_name}</h4>
      <h4>From: {origin}</h4>
    </div>
  );
}

export default Superhero;
