import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import './assets/styles/styles.css';
import { App } from './App';
import { BlogApp } from './reducers'
import registerServiceWorker from './registerServiceWorker';

let appStore = createStore(BlogApp)

ReactDOM.render(
  <Provider store={appStore}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
