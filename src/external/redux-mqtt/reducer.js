import { ADD_DEVICE, REMOVE_DEVICE, DEVICE_DATA } from './actions';

const devices = (state = {}, action) => {
  switch (action.type) {
    case ADD_DEVICE:
      return {
        ...state,
        [action.device.id]: {
          ...action.device,
          data: {
            value: 0,
          },
        },
      };
    case DEVICE_DATA:
      return {
        ...state,
        [action.device.id]: {
          ...state[action.device.id],
          data: {
            value: action.device.value,
          },
        },
      };
    case REMOVE_DEVICE:
      return Object.keys(state)
        .filter(key => key !== action.device.id)
        .reduce((result, current) => {
          result[current] = state[current];
          return result;
        }, {});
    default:
      return state;
  }
};

export default devices;
