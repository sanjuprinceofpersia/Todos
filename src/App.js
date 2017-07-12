import React, { Component } from 'react';
import Header from './components/header';
import Card from './components/card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app_body">
        <Header />
        <Card />
      </div>
    );
  }
}

export default App;
