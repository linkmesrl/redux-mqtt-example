import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';
import reducer from 'reducers';
import { App } from 'containers';

import reduxMqttMiddleware from './lib/redux-mqtt';
import theme from './config/theme';
import registerServiceWorker from './config/registerServiceWorker';

const logger = store => next => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(logger, reduxMqttMiddleware('tcp://localhost:3000')),
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
