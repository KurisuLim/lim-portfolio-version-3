import React, { Component } from 'react';
import '../css/App.css';

class Portfolio extends Component {
    render() {
      return (
          <div className='container-fluid text-center' id='portfolio'>
          <h2>Portfolio</h2>
          <h4>What I have created</h4>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                <a href="http://lim-react200-movie-finder.herokuapp.com/#/" target="_blank">
                    <img src="http://i377.photobucket.com/albums/oo212/KurisuLim/movieFinder_zps203usquz.png" alt="Movie Finder" width="1200" height="700"/>
                    <div className="carousel-caption">
                    </div>
                    </a>      
                </div>

                <div className="item">
                <a href="https://lim-vstda.herokuapp.com/" target="_blank">
                    <img src="http://i377.photobucket.com/albums/oo212/KurisuLim/7dc3ad40-ceff-4d2a-90f1-15930eb883c0_zpst17mpjxu.png" alt="VSTDA" width="1200" height="700"/>
                    <div className="carousel-caption">
                    </div>
                    </a>      
                </div>
                
                <div className="item">
                <a href="https://lim-weather-app.herokuapp.com/" target="_blank">
                    <img src="http://i377.photobucket.com/albums/oo212/KurisuLim/469f40a8-20ac-4b74-b932-932105119f7a_zpsysq50imb.png" alt="Weather App" width="1200" height="700"/>
                    <div className="carousel-caption">
                    </div> 
                    </a>    
                </div>
                <div className="item">
                <a href="https://lim-budget-tracker.herokuapp.com/" target="_blank">
                    <img src="http://i377.photobucket.com/albums/oo212/KurisuLim/b8764aca-6244-44e3-aa2f-6bc6e7027fba_zpsxbdipvax.png" alt="Budget Calculator" width="1200" height="700"/>
                    <div className="carousel-caption">
                    </div>
                    </a>  
                </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>
          </div>
          </div>
    );
  }
}

export default Portfolio;