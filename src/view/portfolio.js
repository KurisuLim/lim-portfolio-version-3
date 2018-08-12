import React, { Component } from 'react';
import '../css/App.css';
import movieFinder from '../images/movieFinder.png';

class Portfolio extends Component {
    render() {
      return (
          <div className='container'>
          <section className='portfolio' id='portfolio'>
          <div className='inner'>
          <div className='content'>
          <h2>Portfolio</h2>
          <h4>Some of the latest work that I completed.</h4>
          <a target='_blank' href='https://lim-react200-movie-finder.herokuapp.com/#/'>
          <img scr={movieFinder}  className='movieFinder' alt='Movie Finder'/>
          </a>
          </div>
          </div>
          </section>
          </div>
    );
}
}

export default Portfolio;