import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Featured from './Components/Featured';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Hero />
        <Featured />
      </div>
    );
  }
}

export default App;
