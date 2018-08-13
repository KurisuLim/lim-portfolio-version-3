import React, { Component } from 'react';
import '../css/App.css';
//import movieFinder from '../images/movieFinder.png';

class Portfolio extends Component {
    render() {
      return (
          <div className='container'>
          <section className='portfolio' id='portfolio'>
          <div className='inner'>
          <div className='content'>
          <h2>Portfolio</h2>
          <h4>Some of the latest work that I completed.</h4>
          <div className='row'>
          <div className='column'>
          <a href="http://lim-react200-movie-finder.herokuapp.com/#/"
          className='movieFinder' target="_blank">
          <img src="http://i377.photobucket.com/albums/oo212/KurisuLim/movieFinder_zpspoy9aphf.png" 
           alt="Movie Finder"/>
          </a>
          </div>
          <div className='column'>
          <a href="https://lim-vstda.herokuapp.com/" className='vstda' target="_blank">
          <img src="http://i377.photobucket.com/albums/oo212/KurisuLim/VSTDA_zpsx7j9eioc.png"  alt="VSTDA"/>
          </a>
          </div>
          <div className='column'>
          <a href="https://lim-weather-app.herokuapp.com/" 
          className='Weather App' target="_blank">
          <img src="http://i377.photobucket.com/albums/oo212/KurisuLim/weatherApp_zpsv5vgl5yo.png"  alt="Weather App"/>
          </a>
          </div>
          <div className='column'>
          <a href="https://lim-node200-ejs-portfolio.herokuapp.com/#" 
          className='ejsPortfolio' target="_blank">
          <img src="http://i377.photobucket.com/albums/oo212/KurisuLim/ejsPortfolio_zpsacht78bn.png"  alt="Ejs Portfolio"/>
          </a>
          </div>
          </div>
          </div>
          </div>
          </section>
          </div>
    );
}
}

export default Portfolio;