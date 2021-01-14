import { BURN, DISCOUNT } from '../actions/index.js';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case BURN:
      state.burn += payload;
      break;

    case DISCOUNT:
      state.discount -= payload;
      break;

    default:
      state;
      break;
  }
  return state;
};

export default reducer;