import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import registerServiceWorker from './registerServiceWorker';
import { BlogApp } from './reducers'

import './index.css';
import './assets/styles/styles.css';
import { App } from './App';
import { PostList } from './components/posts/post-list/'

let appStore = createStore(BlogApp)

ReactDOM.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <MuiThemeProvider>
        <Route path="/" component={App} />
        <Route path="/posts" component={PostList} />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
