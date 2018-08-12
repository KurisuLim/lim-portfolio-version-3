import React, { Component } from 'react';
import '../css/App.css';
import grexlogo from '../images/logo.png'
class Top extends Component {
    render() {
      return (
          <div className='container'>
          <section className='top' id='top'>
          <div className='inner'>
            <div className='content'>
            <h1>Christopher Lim</h1>
            <h2> Front End Developer & Fitness Enthusiast </h2>
            <button className='btn' href='#about'>
            <i className="fa fa-angle-double-down"></i>
            </button>
            </div>
            </div>
          </section>
          </div>
    );
}
}

export default Top;