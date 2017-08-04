import { combineReducers } from 'redux';
import { reduxMqttReducer } from '../external/redux-mqtt';

const rootReducer = combineReducers({
  devices: reduxMqttReducer,
});

export default rootReducer;
