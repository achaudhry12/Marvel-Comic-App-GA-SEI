import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import SuperheroDatabase from "./components/SuperheroDatabase";
import CreateTeam from "./components/CreateTeam";
import CreateSuperhero from "./components/CreateSuperhero";
import SuperheroFullInfo from "./components/SuperheroFullInfo";
import "./App.css";

function App() {
  const [superheros, setSuperheros] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchSuperheros = async () => {
      const resp = await axios.get(baseURL, config);
      setSuperheros(resp.data.records);
    };
    fetchSuperheros();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/superhero-database">
        <SuperheroDatabase superheros={superheros} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/create-team">
        <CreateTeam />
      </Route>
      <Route path="/create-superhero">
        <CreateSuperhero setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/superhero-full-info/:id">
        <SuperheroFullInfo superheros={superheros} />
      </Route>
    </div>
  );
}

export default App;
