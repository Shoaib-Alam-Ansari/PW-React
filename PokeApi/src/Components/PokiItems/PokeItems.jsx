import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PokeItems() {
  const [podexList, setPodexList] = useState([]);
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [podexUrl, setpodexUrl] = useState(
    " https://pokeapi.co/api/v2/pokemon/"
  );
  async function Podex() {
    const response = await axios.get(podexUrl);
    const result = response.data.results;
    const url = result.map((poke) => axios.get(poke.url));
    const urlData = await axios.all(url);
    const data = urlData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
      };
    });
    setPodexList(data);

    setNextUrl(response.data.next);

    setPrevUrl(response.data.previous);
  }
  useEffect(() => {
    Podex();
  }, [podexList]);

  return (
    <>
      {podexList.map((poke) => (
        <div
          className="col-12 col-sm-3 col-md-3 col-lg-2 col-xl-2"
          key={poke.id}
          >
        <Link to={`pokemon/${poke.id}`} className=" nav-link">
          <h6 class="card-title text-center mb-2 text-uppercase" style={{letterSpacing: "3px"}}>{poke.name}</h6>
          <img src={poke.image} class="card-img-top mb-4" alt="..." key={poke.id} style={{height: "150px"}}/>
          </Link>
        </div>
      ))}

      <div className="d-flex gap-2 my-5 justify-content-center">
        <button
          className="btn btn-primary"
          disabled={prevUrl == null}
          onClick={() => {
            setpodexUrl(prevUrl);
          }}
        >
          Previous Podex
        </button>
        <button
          className="btn btn-primary"
          disabled={nextUrl == null}
          onClick={() => {
            setpodexUrl(nextUrl);
          }}
        >
          Next Podex
        </button>
      </div>
    </>
  );
}

export default PokeItems;
