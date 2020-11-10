import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { shortid } from 'shortid';
import { useParams } from 'react-router-dom';
import Pokemon from '../components/Pokemon';

const PokemonList = () => {
  const { id } = useParams();
  const [pokemonList, setPokemonList] = useState({ pokemon: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/type/${id}`,
      );
      // eslint-disable-next-line no-console
      console.log(result.data);
      setPokemonList(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <span>
        Type:
        { id }
      </span>
      <div>
        <div className="GridLayout">
          {
          pokemonList.pokemon.map(p => (
            <div key={shortid} className="TypesBox">
              <Pokemon key={shortid} pokemon={p.pokemon} />
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
