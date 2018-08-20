import React, { Component } from 'react';
import '../css/App.css';


class Footer extends Component {
    render() {
      return (
          <footer className='container-fluid text-center'>
          <a href='#myPage' title='To Top'>
            <soan className='glyphicon glyphicon-chevron-up'></soan>
          </a>
          <p>©2018 Christopher Lim Portfolio </p>
          </footer>
                     
    );
}
}

export default Footer;