import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({ img: '' });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      setData({
        order: result.data.order,
        img: result.data.sprites.other['official-artwork'].front_default,
        height: result.data.height,
        weight: result.data.weight,
      });
    };
    fetchData();
  }, []);

  return (
    <div className="card-column">
      <div className="col-50">
        <div className="card-header">
          <h3>
            #
            {data.order}
            :&nbsp;
            <span>{ id }</span>
          </h3>
        </div>
        <div className="imgPokemon">
          <img className="imgFront" alt={id} src={data.img ?? 'https://img.icons8.com/clouds/452/pokemon-go.png'} />
        </div>
      </div>
      <div className="col-50">
        <p>
          <b>Height:</b>
          &nbsp;
          {data.height}
        </p>
        <p>
          <b>Weight:</b>
          &nbsp;
          {data.weight}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
