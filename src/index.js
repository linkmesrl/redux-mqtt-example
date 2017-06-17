import MQTT from 'async-mqtt';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';

import reducer from 'reducers';
import { App } from 'containers';

import theme from './config/theme';
import registerServiceWorker from './config/registerServiceWorker';

const client = MQTT.connect('ws://broker.mqttdashboard.com:8000/mqtt');

const doStuff = () => {
  console.log('ciao');
  client.publish('asdzxcqwe/1', '!!!!It works!')
  .then(() => console.log('Done'))
  .catch(() => console.log('Err'));
};

// When passing async functions as event listeners, make sure to have a try catch block
client.on('connect', doStuff);
client.publish('asdzxcqwe/1', 'hello world!');


const logger = store => next => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const vanillaPromise = store => next => (action) => {
  if (typeof action.then !== 'function') {
    console.log('Promise solved');
    return next(action);
  }
  console.log('Dispatch promise');
  return Promise.resolve(action).then(store.dispatch);
};

const mqttPromise = store => next => action => Promise.resolve(client.publish('asdzxcqwe/1', '!!!!It works!')).then(next(action));

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(logger, mqttPromise),
  // other store enhancers if any
));


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
