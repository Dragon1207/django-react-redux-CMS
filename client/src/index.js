import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css';
import App from './App';
import { BlogApp } from './reducers'
import registerServiceWorker from './registerServiceWorker';

let appStore = createStore(BlogApp)

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
