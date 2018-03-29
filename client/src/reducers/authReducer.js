import * as actions from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case actions.FETCH_USER:
      return action.payload || false;
  default:
    return state
  };
};
