import { INCREMENT, DECREMENT } from '../constants';

const initialState = {
  current: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        current: state.current + 1,
      };
    case DECREMENT:
      return {
        ...state,
        current: state.current - 1,
      };
    default:
      return state;
  }
};

export default counter;
