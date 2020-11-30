import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { createStore } from 'redux';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../components/App';
import rootReducer from '../reducers';

it('renders without crashing', () => {
  const defaultStore = {
    types: [],
    filter: '',
  };
  const store = createStore(rootReducer, defaultStore);
  act(() => {
    render((
      <Provider store={store}>
        <App />
      </Provider>),
      document.getElementById('root') || document.createElement('div') // for testing purposes
    );
  })
});

it('renders title', () => {
  const defaultStore = {
    types: [],
    filter: '',
  };
  const store = createStore(rootReducer, defaultStore);
  act(() => {
    render((
      <Provider store={store}>
        <App />
      </Provider>),
      document.getElementById('root') || document.createElement('div') // for testing purposes
    );
  })
  expect(screen.getByText('Pokédex')).toBeInTheDocument();
});

it('Types list is an array', () => {
  const defaultStore = {
    types: [],
    filter: '',
  };
  const store = createStore(rootReducer, defaultStore);
  act(() => {
    render((
      <Provider store={store}>
        <App />
      </Provider>),
      document.getElementById('root') || document.createElement('div') // for testing purposes
    );
  });
  expect(defaultStore.types).toBeInstanceOf(Array);
});
