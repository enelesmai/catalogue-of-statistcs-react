import { FILTER_TYPE, FILTER_POKEMON } from '../actions/index';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_TYPE:
      return action.name;
    case FILTER_POKEMON:
      return action.name;
    default:
      return state;
  }
};

export default filterReducer;
