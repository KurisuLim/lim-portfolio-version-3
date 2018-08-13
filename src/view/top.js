import React, { Component } from 'react';
import '../css/App.css';

class Top extends Component {
    render() {
      return (
          <div className='container'>
          <section className='top' id='top'>
          <div className='inner'>
            <div className='content'>
            <h1>Christopher Lim</h1>
            <h2> Front End Developer & Fitness Enthusiast </h2>
            <a className='btn' href='#about'>
            <i className="fa fa-angle-double-down animated"></i>
            </a>
            </div>
            </div>
          </section>
          </div>
    );
}
}

export default Top;