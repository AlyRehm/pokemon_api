
import './App.css';

import React, { useEffect, useState } from 'react';
//updating to use axios 
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      // .then(response => { return response.json()})
      .then((response) => {
        console.log(response.data.results);
        setPokemon(response.data.results);
      })
      // .then(response => {setPokemon(response.results)})
      .catch((err) => {
        console.log(err);
      })
      // put empty array at the end of the useEffect for it to only run once when it is first opened 
  }, []);  

  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <ul>
        {pokemon.map((pokemonObject, index)=>{
            return (<li key={index}>{pokemonObject.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
