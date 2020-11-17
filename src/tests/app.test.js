import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import App from '../components/App';
import rootReducer from '../reducers';

it('renders without crashing', () => {
    const defaultStore = {
        types: [],
        filter: '',
      };
    const store = createStore(rootReducer, defaultStore);
    const div = document.createElement('div');
    ReactDOM.render((
        <Provider store={store}>
          <App />
        </Provider>
      ),
      div
    )
  });

  it('renders title', () => {
    const defaultStore = {
        types: [],
        filter: '',
      };
    const store = createStore(rootReducer, defaultStore);
    const div = document.createElement('div');
        render((
        <Provider store={store}>
          <App />
        </Provider>
      )
    );
    expect(screen.getByText('Pokédex')).toBeInTheDocument();
  });

  it('Types list is an array', () => {
    const defaultStore = {
        types: [],
        filter: '',
      };
    const store = createStore(rootReducer, defaultStore);
    const div = document.createElement('div');
        render((
        <Provider store={store}>
          <App />
        </Provider>
      )
    );
    expect(defaultStore.types).toBeInstanceOf(Array);
  });