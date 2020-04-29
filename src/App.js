import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Featured from './Components/Featured';
import Curated from './Components/Curated';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Hero />
        <Featured />
        <Curated />        
      </div>
    );
  }
}

export default App;
