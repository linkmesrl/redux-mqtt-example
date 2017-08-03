import { ADD_DEVICE, SAVE_DEVICE, INCREMENT, DECREMENT } from 'constants';
import uniqid from 'uniqid';

export const increment = () => ({
  type: INCREMENT,
  topic: 'test',
});

export const decrement = () => ({
  type: DECREMENT,
  topic: 'test',
});

export const addDevice = type => ({
  type: ADD_DEVICE,
  device: {
    id: uniqid(),
    type,
  },
});

export const saveDevice = (id, data) => ({
  type: SAVE_DEVICE,
  device: {
    id,
    data,
  },
});
