import typeReducer from './types';
import filterReducer from './filter';

const { combineReducers } = require('redux');

const rootReducer = combineReducers(
  {
    types: typeReducer,
    filter: filterReducer,
  },
);

export default rootReducer;
