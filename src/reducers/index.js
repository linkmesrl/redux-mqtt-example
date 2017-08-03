import { combineReducers } from 'redux';
import counter from './counter';
import devices from './devices';

const rootReducer = combineReducers({
  counter,
  devices,
});

export default rootReducer;
