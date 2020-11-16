import React from 'react';
import PropTypes from 'prop-types';
import { shortid } from 'shortid';
import { connect } from 'react-redux';
import Type from '../components/Type';
import TypeFilter from '../components/TypeFilter';
import { changeFilterType } from '../actions';

const TypesList = ({ types, filter, changeFilter }) => {
  const handleFilterChange = filter => {
    changeFilter(filter.target.value);
  };

  const displayType = type => {
    if (filter === '' || type.name.includes(filter)) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <TypeFilter change={handleFilterChange} input={filter} />
      <div>
        <div className="GridLayout">
          {
            types.filter(t => displayType(t)).map(type => (
              <div key={shortid} className="TypesBox">
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
  types: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

TypesList.defaultProps = {
  types: [],
  filter: '',
};

const mapStateToProps = state => ({
  types: state.types,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilterType(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TypesList);
