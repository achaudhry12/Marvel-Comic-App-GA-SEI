import Superhero from "./Superhero";

function SuperheroDatabaseFull({ superheros, setToggleFetch }) {
  return (
    <div>
      <main id="superhero-database-container">
        {superheros.map((superhero) => (
          <Superhero superhero={superhero} setToggleFetch={setToggleFetch} />
        ))}
      </main>
    </div>
  );
}

export default SuperheroDatabaseFull;
