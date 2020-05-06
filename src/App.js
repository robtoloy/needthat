import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Featured from './Components/Featured';
import Curated from './Components/Curated';
import Grid from './Components/Grid';
import Affiliates from './Components/Affiliates';
import Capture from './Components/Capture';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div id="root" className="App">
        <Nav/>
        <Hero/>
        <Featured/>
        <Curated/>
        <Grid/>
        <Affiliates />
        <Capture />
        <Footer />
      </div>
    );
  }
}

export default App;
