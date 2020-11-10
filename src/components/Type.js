import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import PokemonList from '../containers/PokemonList';

const Type = ({ type }) => (
  <Router>
    <div className="type type-panel">
      <span>{type.name}</span>
      <Link to={`/${type.name}`}> Go </Link>
    </div>
    <Switch>
      <Route path="/:id" component={PokemonList} />
    </Switch>
  </Router>
);

Type.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

Type.defaultProps = {
  type: [{
    name: '',
  }],
};

export default Type;
