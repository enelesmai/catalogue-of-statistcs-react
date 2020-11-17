import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';

const PokemonDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({ img: '' });
  let listTypes;

  useEffect(() => {
    const fetchDataPokemon = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      // eslint-disable-next-line
      console.log('result:?');
      // eslint-disable-next-line
      console.log(result);
      setData({
        order: result.data.order,
        img: result.data.sprites.other['official-artwork'].front_default,
        height: result.data.height,
        weight: result.data.weight,
        types: result.data.types,
      });
    };
    fetchDataPokemon();
  }, [data]);

  if (data.types !== undefined) {
    listTypes = (
      <p>
        <b>Types:</b>
        <ul>
          {data.types.map(type => (
            <li key={shortid}><a className="LinkButton" href={`/type/${type.type.name}`}>{type.type.name}</a></li>
          ))}
        </ul>
      </p>
    );
  }

  return (
    <div className="card-column">
      <div>
        <div className="card-header">
          <h3>
            #
            {data.order}
            :&nbsp;
            <span>{ id }</span>
          </h3>
        </div>
        <div className="imgPokemonDetail">
          <img className="imgFront" alt={id} src={data.img ?? 'https://img.icons8.com/clouds/452/pokemon-go.png'} />
        </div>
      </div>
      <div className="DetailsBox">
        <div className="col-50">
          <p>
            <b>Height:</b>
          &nbsp;
            {data.height}
            {' '}
            in.
          </p>
          <p>
            <b>Weight:</b>
          &nbsp;
            {data.weight}
            {' '}
            lb.
          </p>
        </div>
        <div className="col-50">
          {listTypes}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
