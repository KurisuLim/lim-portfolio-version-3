import React, { Component } from 'react';
import '../css/App.css';

class Portfolio extends Component {
    render() {
      return (
          <div className='container-fluid text-center' id='portfolio'>
          <h2>Portfolio</h2>
          <h4>What I have created</h4>
          <div className='row text-center'>
            <div className='col-sm-4'>
            <div className='thumbnail'>
                <a href="https://origin-portal.herokuapp.com/" target="_blank">
                <img src='http://i377.photobucket.com/albums/oo212/KurisuLim/portal_zpsso6kbqvv.png'
                 alt='Portal' width='400' height='300' />
                 </a>
                <p><strong>Origin Portal</strong></p>
                <p>A site we made for Employer and Student meet.</p>
            </div>
            </div>
            <div className='col-sm-4'>
                <div className='thumbnail'>
                <a href="http://lim-react200-movie-finder.herokuapp.com/#/" target="_blank">
                <img src='http://i377.photobucket.com/albums/oo212/KurisuLim/movieFinder_zpsaciymfgd.png' alt='Movie Finder'
                width='400' height='300' />
                </a>
                <p><strong>Movie App</strong></p>
                <p>An app that let's you search for your favorite movie.</p>
                </div>
            </div>
            <div className='col-sm-4'>
            <div className='thumbnail'>
            <a href="http://lim-react200-movie-finder.herokuapp.com/#/" target="_blank">
                <img src='http://i377.photobucket.com/albums/oo212/KurisuLim/weatherApp_zpsj2brvyjn.png' alt='Weather App'
                width='400' height='300' />
                </a>
                <p><strong>Weather App</strong></p>
                <p>An app that shows the current weather in any area.</p>
            </div>
            </div>
          </div>
          </div>
    );
}
}

export default Portfolio;