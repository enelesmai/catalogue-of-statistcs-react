import React from 'react';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import TypesList from '../containers/TypesList';
import PokemonList from '../containers/PokemonList';

const ModalSwitch = () => {
  const location = useLocation();

  return (
    <div>
      <Switch location={location}>
        <Route exact path="/">
          <TypesList />
        </Route>
        <Route path="/:id">
          <PokemonList />
        </Route>
      </Switch>
    </div>
  );
};

export default ModalSwitch;
