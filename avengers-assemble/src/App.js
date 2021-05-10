import { useEffect } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import { baseURL, config } from "./services"
import './App.css';

function App() {
  useEffect(() => {
    const fetchSuperheros = async () => {
      const resp = await axios.get(baseURL, config);
    }
    fetchSuperheros();
  }, []);

  return (
    <div className="App">
      <Nav />
      
    </div>
  );
}

export default App;
