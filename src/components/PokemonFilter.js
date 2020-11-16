import React from 'react';

const pokemonFilter = ({ change, filter }) => (
  <div>
    <input className="input-search" name="pokemon-filter" id="pokemon-filter" onChange={change.bind(this)} type="text" value={filter} placeholder="Write your pokemon name" />
  </div>
);

export default pokemonFilter;
