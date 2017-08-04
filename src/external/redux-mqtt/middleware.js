import MQTT from 'async-mqtt';
import { Promise } from 'es6-promise-polyfill';
import { addDevice } from './actions';

const reduxMqttMiddleware = config => ({ dispatch }) => {
  const client = MQTT.connect(config);
  client.subscribe('registrations')
  .catch(err => console.log('registrations err', err));

  client.on('message', ((topic, message) => {
    const msgObj = JSON.parse(message);
    if (topic === 'registrations') {
      client.subscribe(msgObj.deviceId);
      dispatch(addDevice(msgObj));
    }
  }));

  return next => (action) => {
    console.log('nextaction', action);
    Promise.resolve(client.publish(action.topic, JSON.stringify(action)).then(next(action)));
  };
};

export default reduxMqttMiddleware;
