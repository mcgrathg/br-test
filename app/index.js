import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(<App />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable React components
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
