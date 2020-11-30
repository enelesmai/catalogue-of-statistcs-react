import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Type from '../components/Type';
import TypeFilter from '../components/TypeFilter';
import { changeFilterType } from '../actions';

const TypesList = ({ filter, changeFilter }) => {
  const [typesList, setTypesList] = useState({ types: [] });

  const handleFilterChange = filter => {
    changeFilter(filter.target.value);
  };

  const displayType = type => {
    if (filter === '' || type.name.includes(filter)) {
      return true;
    }
    return false;
  };

  const generateKey = pre => `${pre}_${new Date().getTime()}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/type',
      );
      setTypesList({ types: result.data.results });
    };
    fetchData();
  }, []);

  return (
    <div>
      <TypeFilter change={handleFilterChange} input={filter} />
      <div>
        <div className="GridLayout">
          {
            typesList.types.filter(t => displayType(t)).map(type => (
              <div key={generateKey(type.name)} className="TypesBox">
                <Type key={type.name} type={type} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

TypesList.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

TypesList.defaultProps = {
  filter: '',
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilterType(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TypesList);
