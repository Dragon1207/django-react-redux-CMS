import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { loadPosts } from './actions/post-actions';
import { appStore } from './store';
import { Header } from './components/header/';
import { Home } from './components/home/';
import { Footer } from './components/footer/';
import { PostList } from './components/posts/post-list/'

export class App extends Component {
  constructor() {
    super();
    appStore.dispatch(loadPosts());
  }
  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/posts' component={PostList} />
          </Switch>
        <Footer />
      </div>
    );
  }
}
