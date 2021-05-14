// import { useEffect, useState } from "react";
// import axios from "axios";
// import { baseURL, config } from "../services";
// import TeamSuperhero from "./TeamSuperhero";


// function TeamDatabase() {
//   const [superheros, setSuperheros] = useState([]);
//   const [toggleFetch, setToggleFetch] = useState(false);

//   useEffect(() => {
//     const fetchSuperheros = async () => {
//       const resp = await axios.get(baseURL, config);
//       setSuperheros(resp.data.records);
//     };
//     fetchSuperheros();
//   }, [toggleFetch]);

//   return (
//     <div>
//       <main id="superhero-database-container">
//           {superheros.map((superhero) => (
//             <TeamSuperhero
//               superhero={superhero}
//               setToggleFetch={setToggleFetch}
//             />
//           ))}
//         </main>
//     </div>
//   );
// }

// export default TeamDatabase;
