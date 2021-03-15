import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PokemonDetail from '../components/PokemonDetail';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders pokemon data', async () => {
  const history = createMemoryHistory();
  const route = '/detail/pidgey';
  history.push(route);

  const fakePokemon = {
    order: '#',
    img: 'http://',
    height: 'in.',
    weight: 'lb.',
    types: ['flying', 'rock'],
  };
  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(fakePokemon),
  }));

  // Use the asynchronous version of act to apply resolved promises
  act(() => {
    render(
      <Router history={history}>
        <PokemonDetail id="123" />
      </Router>, container,
    );
  });

  expect(container.querySelector('h3').textContent).toContain(fakePokemon.order);
  expect(container.querySelector('img').src).toContain(fakePokemon.img);
  expect(container.textContent).toContain(fakePokemon.height);
  expect(container.textContent).toContain(fakePokemon.weight);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
