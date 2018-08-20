import React, { Component } from 'react';
import '../css/App.css';

class Contact extends Component {
 
    render() {
      return (
          <div className='container-fluid bg-grey' id='contact'>
            <h2 className='text-center'>CONTACT</h2>
            <div className='row'>
              <div className='col-sm-5'>
                <p>Hiring? Please contact me!</p>
                <p><span className='glyphicon glyphicon-map-marker'></span>San Diego, US</p>
                <p><span className='glyphicon glyphicon-phone'></span> +01 6198326421</p>
                <p><span className='glyphicon glyphicon-envelope'></span>toffer.lim87@gmail.com</p>
              </div>
              <form action='https:/formspree.io/toffer.lim87@gmail.com' method='POST'>
              <div className='col-sm-7'>
                <div className='row'>
                  <div className='col-sm-6 form-group'>
                    <input className='form-control' id='name' name='name' placeholder='Name' type='text' required/>
                  </div>
                  <div className='col-sm-6 form-group'>
                    <input className='form-control' id='email' name='email' placeholder='Email' type='email' required/>
                  </div>
                </div>
                <textarea className='form-control' id='comments' name='comments' placeholder='Comments' row='5'></textarea><br/>
                <div className='col-sm-12 form-group'>
                  <button className='btn btn-default pull-right' type='submit'>Send</button>
                </div>
                </div>
                </form>
                </div>
              </div> 
    );
  }
}

export default Contact;

