import MQTT from 'async-mqtt';
import { Promise } from 'es6-promise-polyfill';

export const reduxMqttMiddleware = (config) => {
  const client = MQTT.connect(config);
  client.subscribe('registrations')
  .catch(err => console.log('registrations err', err));

  client.on('message', ((topic, message) => {
    console.log('message', message.toString());
  }));

  return store => next => (action) => {
    Promise.resolve(client.publish(action.topic, JSON.stringify(action)).then(next(action)));
  };
};
