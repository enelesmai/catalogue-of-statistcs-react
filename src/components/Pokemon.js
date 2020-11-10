import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

const Pokemon = ({ pokemon }) => (
  <Router>
    <div>
      <span>{ pokemon.name }</span>
      <Link to={`/${pokemon.name}`} />
      <Switch>
        <Route path={`/${pokemon.name}`} />
      </Switch>
    </div>
  </Router>
);

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

Pokemon.defaultProps = {
  pokemon: [{
    name: '',
  }],
};

export default Pokemon;
