import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <button className="nav-button">Homepage</button>
      </Link>
      <Link to="/superhero-database">
        <button className="nav-button">Superhero Database</button>
      </Link>
      {/* <Link to="/create-team">
        <button className="nav-button">Create Team</button>
      </Link> */}
      <Link to="/create-superhero">
        <button className="nav-button">Create Superhero</button>
      </Link>
    </nav>
  );
}

export default Nav;
