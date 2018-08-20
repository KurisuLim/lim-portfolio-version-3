import React, { Component } from 'react';
import '../css/App.css';

class About extends Component {
    render() {
      return (
          <div className='container-fluid' id='about'>
            <div className='row'>
            <div className='col-sm-8'>
            <h2>About</h2>
            <h4>"A winner is a dreamer who never gives up." Nelson Mandela</h4>
            <p>Hi! I am Lim, I used to be over-weight and now I am fit. Through hardwork and dedication,
                I lose over 50 lbs in over a year span. And I am also incoorperating that with my work ethic.
                If things need to be done, I will make sure it will be done whatever it takes.</p>
            </div>
            <div className='col-sm-4'>
            <img src='https://avatars0.githubusercontent.com/u/40224422?s=400&u=87fe0b8900b427b38496e0d5aaef25732bdf7898&v=4' id='myPic' 
                className='img-responsive img-circle margin' 
                alt='Lim' width='350' height='350'/>
            </div>
            </div>
          </div>
    );
}
}

export default About;