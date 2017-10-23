import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { Header } from './components/header/';
import { Home } from './components/home/';
import { Footer } from './components/footer/';
import { PostList } from './components/posts/post-list/'
import logo from './logo.svg';

export class App extends Component {
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
