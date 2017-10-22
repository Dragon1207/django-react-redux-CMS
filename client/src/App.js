import React, { Component } from 'react';
import { Header } from './components/header/';
import { Home } from './components/home/';
import { Footer } from './components/footer/';
import logo from './logo.svg';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}
