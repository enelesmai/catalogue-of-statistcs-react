import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Type from '../components/Type';
import TypeFilter from '../components/TypeFilter';
import { changeFilter } from '../actions';

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
        <div>
          {
            types.filter(t => displayType(t)).map(type => (
              <Type key={type.name} type={type} />
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
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TypesList);
