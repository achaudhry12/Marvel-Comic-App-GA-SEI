import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1 id="home-title">Avengers Assemble - MARVEL Superhero Database</h1>
      <div id="home-container">
        <div id="home-item1">
          <Link to="/superhero-database">Superhero Database</Link>
        </div>
        <div id="home-item2">
          <a href="/">Create Team</a>
          {/* <Link to="/create-team">Create Team</Link> */}
        </div>
        <div id="home-item3">
          <Link to="/create-superhero">Create Superhero</Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
