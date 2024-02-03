import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MovieItems from "./Components/MovieItems/MovieItems";
import SearchBox from "./Components/SearchBox/SearchBox";

function App() {

  return (
    <>
      <div className="container">
        <div className="row">

            {/*Movie  Search Input */}
          <SearchBox />
          </div>

          {/* Mobies Item List  */}

        </div>
    </>
  );
}

export default App;
