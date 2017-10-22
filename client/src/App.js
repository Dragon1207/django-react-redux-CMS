import React, { Component } from 'react';
import { Header } from './components/header/'
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}
