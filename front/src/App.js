import React from "react";
import "./App.css";
import { useState } from "react";
const App = () => {

  /* state declaration */
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);

  /* fetching function to get a pokemon */
  const searchPokemon = () => {
    fetch(`/${pokemonName === "" ? 1 : pokemonName}`)
      .then((res) => res.json())
      .then((json) => {
        json.statusCode === 400 ? setPokemon(null) : setPokemon(json);
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setPokemonName(e.target.value);
        }}
      />
      <button onClick={searchPokemon}>Name or ID</button>
      {pokemon && (
        <div id="flex-container">
          <>
            <div className="flex-item">
              <h1>{pokemon.name}</h1>
              <p>{pokemon.id}</p>
            </div>
            <div className="flex-item">
              <img
                className="flex-img"
                src={pokemon.sprites ? pokemon.sprites.front_default : ""}
                alt="pokemon"
              />
            </div>
          </>
        </div>
      )}
      {!pokemon && <p>No Data</p>}
    </div>
  );
};

export default App;
