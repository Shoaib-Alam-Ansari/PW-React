import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FetchUrl from "./Components/PokiItems/FetchUrl";
import PokeItems from "./Components/PokiItems/PokeItems";
import RoutePodex from "./Routes/RoutePodex";
import Navbar from "./Components/Navbars/Navbar";
import NavScrollExample from "./Components/Navbars/Navbar";

function App() {
  return (
    <div className="">

        <NavScrollExample />
    <div className="container">
      <div className="row">
        {/*Seacr Input   */}

        <h1 className="text-center my-4">Pokedex</h1>

        {/* Poke Items List here*/}
        <RoutePodex />
      </div>
    </div>
    </div>
  );
}

export default App;
