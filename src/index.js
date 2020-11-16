import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import axios from 'axios';
import App from './components/App';
import rootReducer from './reducers';

let responseData = [];

axios({
  method: 'GET',
  url: 'https://pokeapi.co/api/v2/type',
  headers: {
    'content-type': 'application/json',
  },
})
  .then(response => {
    responseData = response.data.results;
    const defaultStore = {
      types: responseData,
      filter: '',
    };

    const store = createStore(rootReducer,
      defaultStore);

    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root'),
    );
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
