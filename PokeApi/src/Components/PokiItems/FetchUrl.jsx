import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';


function FetchUrl() {
  const [podex, setPodex] = useState([]);
  async function GetData() {
    const url = await fetch(" https://pokeapi.co/api/v2/pokemon/");
    const respionse = await url.json();
    const result = respionse.results;
    const resulturl = result.map((poke) => poke.url);
    resulturl.map((pokeUrl) => {
      const fetchPromise = fetch(pokeUrl);
      fetchPromise
        .then((res) => {
          return res.json();
        })
        .then((data) => setPodex({id: data.id, name: data.name, img: data.sprites.front_default}))
    });
  }

useEffect(() =>{
    GetData()
},[podex])


  return (
    <>

    {podex.map((poke) => (
      console.log(poke)

    ))}
</>
  );
}

export default FetchUrl;
