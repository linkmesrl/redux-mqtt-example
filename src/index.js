import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import { App } from 'src/containers';
import './styles.css';

import { reduxMqttMiddleware } from './external/redux-mqtt';
import registerServiceWorker from './config/registerServiceWorker';

const logger = store => next => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(
    logger,
    reduxMqttMiddleware('ws://broker.mqttdashboard.com:8000/mqtt'),
  ),
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
