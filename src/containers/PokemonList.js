import React from 'react';
import { useParams } from 'react-router-dom';
import Pokemon from '../components/Pokemon';

/*
const searchSubreddit = async query => fetch(`https://www.reddit.com/search.json?q=${query}`).then(_ => _.json());
*/

const PokemonList = () => {
  const { id } = useParams();
  const pokemons = [];
  /*
    constructor(props) {
    super(props);
    this.state = {
      type: '',
      pokemons: [],
    };
  } */
  return (
    <div>
      <span>
        Type:
        { id }
      </span>
      <div>
        {
        pokemons.map(pokemon => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))
      }
      </div>
    </div>
  );
};

export default PokemonList;
