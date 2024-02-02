import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PokeDetails() {
  const [pokeDetails, setPokeDetails] = useState({});
  const { id } = useParams();
  const pokemonDetails = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.data;
    setPokeDetails({
      name: data.name,
      img: data.sprites.other.dream_world.front_default,
      weight: data.weight,
      height: data.height,
      types: data.types.map((t) => t.type.name),
    });
  };

  useEffect(() => {
    pokemonDetails();
  }, []);

  return (
    <div className=" d-flex justify-content-center align-items-center">
      <div class="card mb-3  bg-info-subtle" style={{ maxWidth: "700px" }}>
        <div class=" d-flex justify-content-between">

          <div class="col-4 shadow-lg m-3 rounded bg-light">
            <img
              src={pokeDetails.img}
              alt="Trendy Pants and Shoes"
              class="img-fluid rounded-start"
             style={{height:"200px", width:"500px"}}/>
          </div>

            <div class="d-flex flex-column col-6 mt-4 ">
              <h5 class="card-title">Name: {pokeDetails.name}</h5>
                <span class="card-text">Weight: {pokeDetails.weight}</span>
                <span class="card-text">Height: {pokeDetails.height}</span>
                <span class="card-text">
                  Types:{" "}
                  {pokeDetails.types &&
                    pokeDetails.types.map((name) => (
                      <small class="text-body-secondary ms-2">{name}</small>
                    ))}
                </span>
              </div>

        </div>
      </div>
    </div>
  );
}

export default PokeDetails;
