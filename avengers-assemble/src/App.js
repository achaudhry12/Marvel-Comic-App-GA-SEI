import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import SuperheroDatabase from "./components/SuperheroDatabase";
import CreateTeam from "./components/CreateTeam";
import CreateSuperhero from "./components/CreateSuperhero";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
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

export default App;
