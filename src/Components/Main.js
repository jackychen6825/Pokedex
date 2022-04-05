import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function Main() {

  const [pokemons, setPokemons] = useState([]);
  const URL = "http://pokeapi.co/api/v2/pokemon/?limit=494";

  function fetchPokemon() {
    let results;

    fetch(URL)
      .then((res) => res.json())
      .then((resJSON) => {
        results = resJSON.results.slice(386, 494);
        const promises = [];
        for (const pokemon of results) {
          const pokemonURL = pokemon.url;
          const promise = fetch(pokemonURL).then(res => res.json());
          promises.push(promise);
        }

        Promise.all(promises)
          .then(allPokemons => setPokemons(allPokemons))
      });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="pokedex-container">
      {
        pokemons.length ? 
        pokemons.map(poke => <PokemonCard name={poke.name} image={poke.sprites.other.dream_world.front_default} />) 
        : ""
      }
    </div>
  );
}

export default Main;

