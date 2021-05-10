import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1 id="home-title">Avengers Assemble - MARVEL Superhero Database</h1>
      <div id="home-container">
        <Link to="/superhero-database">
          <div>
            <h2 className="home-subtitle">Superhero Database</h2>
          </div>
        </Link>
        <Link to="/create-team">
          <div>
            <h2 className="home-subtitle">Create Team</h2>
          </div>
        </Link>
        <Link to="/create-superhero">
          <div>
            <h2 className="home-subtitle">Create Superhero</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
