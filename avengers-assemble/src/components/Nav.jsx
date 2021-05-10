import React from "react";
import { Link, Route } from "react-router-dom";
import Homepage from "./Homepage";
import SuperheroDatabase from "./SuperheroDatabase";
import CreateTeam from "./CreateTeam";
import CreateSuperhero from "./CreateSuperhero";

function Nav() {
  return (
    <div>
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
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/superhero-database">
        <SuperheroDatabase />
      </Route>
      <Route path="/create-team">
        <CreateTeam />
      </Route>
      <Route path="/create-superhero">
        <CreateSuperhero />
      </Route>
    </div>
  );
}

export default Nav;
