import React from "react";
import { Link, Route } from "react-router-dom";
// import Homepage from "./Homepage";
// import SuperheroDatabase from "./SuperheroDatabase";
// import CreateTeam from "./CreateTeam";
// import CreateSuperhero from "./CreateSuperhero";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Route exact path="/">
        {/* <Homepage /> */}
      </Route>
      <Link to="/superhero-database">
        <button>Superhero Database</button>
      </Link>
      <Route exact path="/">
        {/* <SuperheroDatabase /> */}
      </Route>
      <Link to="/create-team">
        <button>Create Team</button>
      </Link>
      <Route exact path="/">
        {/* <CreateTeam /> */}
      </Route>
      <Link to="/create-superhero">
        <button>Create Superhero</button>
      </Link>
      <Route exact path="/">
        {/* <CreateSuperhero /> */}
      </Route>
    </nav>
  );
}

export default Nav;
