import { ADD_DEVICE, SAVE_DEVICE, DEVICE_DATA } from './actions';

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
