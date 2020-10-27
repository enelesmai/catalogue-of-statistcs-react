import React from 'react';
import TypesList from '../containers/TypesList';

const App = () => (
  <div className="app">
    <header className="app-header">
      <div className="left-side">
        <h1>Pokedex</h1>
        <span>Pokemon</span>
        <span />
      </div>
    </header>
    <div className="container">
      <div className="types-list">
        <TypesList />
      </div>
    </div>
  </div>
);

export default App;
