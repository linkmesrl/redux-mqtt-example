import { ADD_DEVICE, SAVE_DEVICE } from '../constants';

const devices = (state = {}, action) => {
  switch (action.type) {
    case ADD_DEVICE:
      return {
        ...state,
        [action.device.id]: action.device,
      };
    case SAVE_DEVICE:
      return {
        ...state,
        [action.device.id]: {
          ...state[action.device.id],
          data: action.device.data,
        },
      };
    default:
      return state;
  }
};

export default devices;
