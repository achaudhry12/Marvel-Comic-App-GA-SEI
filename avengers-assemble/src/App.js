import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import SuperheroDatabase from "./components/SuperheroDatabase";
// import CreateTeam from "./components/CreateTeam";
import CreateSuperhero from "./components/CreateSuperhero";
import SuperheroFullInfo from "./components/SuperheroFullInfo";
import SuperheroDatabaseFull from "./components/SuperheroDatabaseFull";
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
        <SuperheroDatabase
          superheros={superheros}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      {/* <Route path="/create-team">
        <CreateTeam superheros={superheros}
          setToggleFetch={setToggleFetch}/>
      </Route> */}
      <Route path="/create-superhero">
        <CreateSuperhero setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/superhero-full-info/:id">
        <SuperheroFullInfo superheros={superheros} />
      </Route>
      <Route path="/superhero-database-full">
        <SuperheroDatabaseFull
          superheros={superheros}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      <footer>
        <div id="app-footer">
          <p>Project 2: GA SEI Loon</p>
          <p>|</p>
          <p>Made by Anss Chaudhry</p>
          <p>|</p>
          <p>
            Data Retrieved from:{" "}
            <a href="https://www.marvelhq.com/characters">marvelhq.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
