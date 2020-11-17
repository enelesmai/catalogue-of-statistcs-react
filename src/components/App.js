import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import ModalSwitch from './ModalSwitch';

const App = () => (
  <div className="app">
    <header className="app-header">
      <div className="left-side">
        <h1>Pokédex</h1>
        <span />
      </div>
    </header>
    <div className="container">
      <Router>
        <ModalSwitch />
      </Router>
    </div>
  </div>
);

export default App;
