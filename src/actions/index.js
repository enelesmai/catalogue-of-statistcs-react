const CHANGE_FILTER = 'CHANGE_FILTER';

const changeFilter = name => ({
  type: CHANGE_FILTER,
  name,
});

export {
  changeFilter, CHANGE_FILTER,
};
