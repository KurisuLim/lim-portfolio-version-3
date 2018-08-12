import React, { Component } from 'react';
import '../css/App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className='nav' id='nav'>
          <a className='logo' href='#top'>Christopher Lim</a>
          <ul>
            <li>
              <a href='#about'>
                About Me
              </a>
            </li>
            <li>
              <a href='#portfolio'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
