import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Type from '../components/Type';

const TypesList = ({ types }) => (
  <div>
    <div>
      <div>
        {
            types.map(type => (
              <Type key={type.name} type={type} />
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
    }),
  ),
};

TypesList.defaultProps = {
  types: [],
};

const mapStateToProps = state => ({
  types: state.types,
});

export default connect(mapStateToProps, null)(TypesList);
