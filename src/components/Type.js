import React from 'react';
import PropTypes from 'prop-types';

const Type = ({ type }) => (
  <div className="type type-panel">
    <span>{type.name}</span>
    <div className="first-pokemon">
      <img src={type.firstPokemonURL} alt={type.firstPokemonName} />
    </div>
  </div>
);

Type.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string.isRequired,
    firstPokemonURL: PropTypes.string.isRequired,
    firstPokemonName: PropTypes.string.isRequired,
  }),
};

Type.defaultProps = {
  type: [{
    name: '',
    firstPokemonURL: '',
    firstPokemonName: '',
  }],
};

export default Type;
