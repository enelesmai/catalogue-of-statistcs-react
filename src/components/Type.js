import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { shortid } from 'shortid';

const Type = ({ type }) => {
  const [data, setData] = useState({ img: '' });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/type/${type.name}`,
      );
      let resultSample = [];
      if (result.data.pokemon.length > 0) {
        const n = 1;
        const sample = result.data.pokemon
          .map(x => ({ x, r: Math.random() }))
          .sort((a, b) => a.r - b.r)
          .map(a => a.x)
          .slice(0, n);
        resultSample = await axios(
          sample[0].pokemon.url,
        );
      }
      setData({
        img: resultSample.data === undefined ? null : resultSample.data.sprites.other['official-artwork'].front_default,
      });
    };
    fetchData();
  }, [type]);

  return (
    <div className="type type-panel">
      <h3>{type.name}</h3>
      <div className="imgPokemon">
        <Link className="LinkButton" key={shortid} to={`/type/${type.name}`}>
          <img
            className="imgType"
            src={data.img ?? 'https://img.icons8.com/clouds/452/pokemon-go.png'}
            alt={type.name}
          />
        </Link>
      </div>
    </div>
  );
};

Type.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

Type.defaultProps = {
  type: [{
    name: '',
    url: '',
  }],
};

export default Type;
