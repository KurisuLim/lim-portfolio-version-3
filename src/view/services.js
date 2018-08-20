import React, { Component } from 'react';
import '../css/App.css';

class Services extends Component {
    render() {
      return (
          <div className='container-fluid text-center bg-grey' id='services'>
          <h2>Services</h2>
          <h4>My Current Skills</h4>
          <br />
            <div className='row'>
                <div className='col-sm-4'>
                    <i className="fab fa-react logo-small"></i>
                    <h4>React</h4>
                    <p>A Javascript library for building user interfaces.</p>
                </div>
                <div className='col-sm-4'>
                    <i className="fab fa-react logo-small"></i>
                    <h4>React-Native</h4>
                    <p>A Javascript library for building apps for mobile.</p>
                </div>
                <div className='col-sm-4'>
                    <i className="fab fa-js logo-small"></i>
                    <h4>Javascript</h4>
                    <p>A high-level,interpereted programming language.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <i className="fab fa-html5 logo-small"></i>
                    <h4>HTML</h4>
                    <p>A standard markup language for creating web pages and web application.</p>
                </div>
                <div className='col-sm-4'>
                    <i className="fab fa-css3 logo-small"></i>
                    <h4>CSS</h4>
                    <p>A style sheet language used for describing the presentation of a
                        document written in a markup language like HTML.
                    </p>
                </div>
                <div className='col-sm-4'>
                    <i className="fas fa-stroopwafel logo-small"></i>
                    <h4>JQUERY</h4>
                    <p>A cross-platform Javascript library designed to simplify the client-side scripting of HTML.</p>
                </div>
            </div>
          </div>
    );
}
}

export default Services;