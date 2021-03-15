const FILTER_TYPE = 'FILTER_TYPE';
const FILTER_POKEMON = 'FILTER_POKEMON';

const changeFilterType = name => ({
  type: FILTER_TYPE,
  name,
});

const changeFilterPokemon = name => ({
  type: FILTER_POKEMON,
  name,
});

export {
  changeFilterType, FILTER_TYPE, changeFilterPokemon, FILTER_POKEMON,
};
