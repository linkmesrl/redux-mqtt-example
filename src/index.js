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

const logger = store => next => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const mqttPromise = (config) => {
  // When passing async functions as event listeners, make sure to have a try catch block
  // client.on('connect', doStuff);

  const client = MQTT.connect(config);
  return () => next => (action) => {
    Promise.resolve(client.publish(action.topic, JSON.stringify(action))).then(next(action));
  };
};

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(logger, mqttPromise('tcp://localhost:3000')),
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
