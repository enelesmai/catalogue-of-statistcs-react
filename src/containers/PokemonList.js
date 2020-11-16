import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { shortid } from 'shortid';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Pokemon from '../components/Pokemon';
import PokemonFilter from '../components/PokemonFilter';
import { changeFilterPokemon } from '../actions';

const PokemonList = ({ filter, changeFilter }) => {
  const { id } = useParams();
  const [pokemonList, setPokemonList] = useState({ pokemon: [] });

  const handleFilterChange = filter => {
    changeFilter(filter.target.value);
  };

  const displayPokemon = pokemon => {
    if (filter === '' || pokemon.name.includes(filter)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/type/${id}`,
      );
      setPokemonList({ pokemon: result.data.pokemon });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>
        <span><a className="Link" href="/">&lt;</a></span>
        Type:
        { ` ${id}` }
      </h2>
      <div>
        <PokemonFilter change={handleFilterChange} input={filter} />
        <div className="GridLayout">
          {
            pokemonList.pokemon.filter(p => displayPokemon(p.pokemon)).map(p => (
              <div key={shortid} className="PokemonBox">
                <Pokemon key={shortid} pokemon={p.pokemon} />
              </div>
            ))
        }
        </div>
      </div>
    </div>
  );
};

PokemonList.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

PokemonList.defaultProps = {
  filter: '',
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilterPokemon(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
