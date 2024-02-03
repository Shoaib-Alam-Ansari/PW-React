import React, { useState, useEffect } from "react";
import MovieItems from "../MovieItems/MovieItems";
import axios from "axios";

function SearchBox() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const SearchMovie = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${input}&apikey=c9466890`
    );
    const data = await response.data.Search;
    if (data != undefined) {
      const searchData = data.map((se) => {
        return {
          title: se.Title,
          poster: se.Poster,
          id: se.imdbID,
        };
      });
      setInput("");
      setData(searchData);
    }else{
      alert(`${input} movie is not found`)
      setInput("")
    }
  };

  const ClickHandler = () => {
    SearchMovie();
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5 mb-3">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <div class="input-group mb-3">
            <input
              type="text"
              value={input}
              class="form-control"
              placeholder="Enter Movie Name"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              class="btn btn-primary"
              type="button"
              id="button-addon2"
              onClick={ClickHandler}
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <MovieItems data={data} />
    </>
  );
}

export default SearchBox;
