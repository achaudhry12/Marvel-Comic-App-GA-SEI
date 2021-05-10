import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <button>Homepage</button>
      </Link>
      <Link to="/superhero-database">
        <button>Superhero Database</button>
      </Link>
      <Link to="/create-team">
        <button>Create Team</button>
      </Link>
      <Link to="/create-superhero">
        <button>Create Superhero</button>
      </Link>
    </nav>
  );
}

export default Nav;
