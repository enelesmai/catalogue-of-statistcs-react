import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Pokemon from '../components/Pokemon';

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

it('renders pokemon box', async () => {
  const history = createMemoryHistory();
  const route = '/type/normal';
  history.push(route);

  const pokemonProp = {
    url: 'sr',
    name: 'pidgey',
  };

  const fakePokemon = {
    order: '#1',
    img: 'helo.jpg',
    data: 'pidgey',
  };

  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(fakePokemon),
  }));

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(
      <Router history={history}>
        <Pokemon id="123" pokemon={pokemonProp} />
      </Router>, container,
    );
  });

  expect(container.querySelector('h3').textContent).toContain(fakePokemon.order);
  expect(container.querySelector('img').src).toBe(fakePokemon.img);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
