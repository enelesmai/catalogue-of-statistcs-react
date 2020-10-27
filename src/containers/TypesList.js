import React from 'react';
import PropTypes from 'prop-types';
import Type from '../components/Type';

const TypesList = ({ types }) => (
  <div>
    <div>
      <div>
        {
            types.map(type => (
              <Type key={type.id} type={type} />
            ))
        }
      </div>
    </div>
  </div>
);

TypesList.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      firstPokemonURL: PropTypes.string.isRequired,
      firstPokemonName: PropTypes.string.isRequired,
    }),
  ),
};

TypesList.defaultProps = {
  types: [],
};

export default TypesList;
