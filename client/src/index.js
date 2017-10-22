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
  <MuiThemeProvider>
    <Provider store={appStore}>
      <App />
    </Provider>,
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
