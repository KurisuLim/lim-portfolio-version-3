import React, { Component } from 'react';
import './css/App.css';
import Navbar from './view/navbar';
import Top from './view/top';
import About from './view/about';
import Contact from './view/contact';
import Portfolio from './view/portfolio';
import Services from './view/services';
import Maps from './view/maps';
import Footer from './view/footer';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Top />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
