import { INCREMENT, DECREMENT } from 'constants';

export const increment = () => ({
  type: INCREMENT,
  topic: 'test',
});

export const decrement = () => ({
  type: DECREMENT,
  topic: 'test',
});
