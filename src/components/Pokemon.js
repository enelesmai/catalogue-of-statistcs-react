import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemon }) => {
  const [data, setData] = useState({ img: '' });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        pokemon.url,
      );
      // eslint-disable-next-line no-console
      console.log(result.data);
      setData({ img: result.data.sprites.other['official-artwork'].front_default });
    };
    fetchData();
  }, []);

  return (
    <div>
      <span>{ pokemon.name }</span>
      <img alt={pokemon.name} src={data.img} />
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

Pokemon.defaultProps = {
  pokemon: [{
    name: '',
    url: '',
  }],
};

export default Pokemon;
