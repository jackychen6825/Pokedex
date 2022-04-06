import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { RegionContext } from "../Helper/Context";
import PokemonCard from "./PokemonCard";

function Main() {

  const [pokemons, setPokemons] = useState([]);

  const { region, setRegion } = useContext(RegionContext);
  const pokedexURL = `https://pokeapi.co/api/v2/pokedex/${region}`;

  function fetchPokedex() {
    const promises = [];

    fetch(pokedexURL)
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON);
        const regionsPokemons = resJSON.pokemon_entries;

        for (const pokemon of regionsPokemons) {
          const name = pokemon.pokemon_species.name;
          const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
          const promise = 
            fetch(URL)
              .then(res => res.json())
              .catch(err => console.log(err));
          promises.push(promise);
        };

        Promise.all(promises)
          .then(responses => setPokemons(responses));
      });
  };

  useEffect(() => {
    fetchPokedex();
  }, [region]);

  return (
    <div className="pokedex-container">
      {
        pokemons.length ? 
        pokemons.map(
          poke => {
            return poke ? <PokemonCard key={poke.id} name={poke.name} image={poke.sprites.other.dream_world.front_default} /> : <div></div>
          }
        ) 
        : ""
      }
    </div>
  );
}

export default Main;

