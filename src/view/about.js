import React, { Component } from 'react';
import '../css/App.css';
// import myPhoto from '../images/myPhoto';

class About extends Component {
    render() {
      return (
          <div className='container'>
          <section className='about' id='about'>
          <div class='inner'>
            <div class='content'>
            <img src="https://avatars0.githubusercontent.com/u/40224422?s=400&u=87fe0b8900b427b38496e0d5aaef25732bdf7898&v=4"  alt="Image"/>
            <h2>I'm a visonary.</h2>
            <p>
                My name is Christopher Lim, currently I am student of Origin Code Academy. I belive
              that hard works always pays off. And if you try hard enough, you can even be better
              than the one who have talent in that craft. When I work in my projects, I visualize 
              what I want to do. I draw it on a piece of paper and break it on smaller steps.
              I do not stop, until I finish what I started. I always try to strive to be better.
            </p>
            <p>
                In addition to being a Front End Developer, I am also a fitness enthusiast. During
                my non working hours, I always try to go to the gym to workout and eat clean. I used
                to be over weight and not healthy. So I know how it feels like being unmotivated
                and just go with the flow. So now, I strive to become a better version of my self
                each day and challenge myself with new goals.
            </p>
            </div>
            </div>
          </section>
          </div>
    );
}
}

export default About;