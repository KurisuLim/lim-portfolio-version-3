import React, { Component } from 'react';
import '../css/App.css';


class Contact extends Component {
    render() {
      return (
          <div className='container'>
          <section className='contact' id='contact'>
          <div className='inner'>
          <div className='content'>
          <h1>Contact</h1>
          <div className='row'>
          <div className="col">
        <p>Hiring? Please send a message.</p>
        <p><i className="fas fa-map-marker-alt"></i>San Diego, US</p>
        <p><i class="fas fa-mobile-alt"></i>Phone: +01 6198326421</p>
        <p><i class="fas fa-envelope"></i>
        Email: toffer.lim87@gmail.com</p>
        <a href='https://github.com/KurisuLim'><i class="fab fa-github"></i>
        GitHub: https://github.com/KurisuLim </a>
        </div>
          <form action="https://formspree.io/toffer.lim87@gmail.com"
            method="POST">
          <formgroup className='col-name'>
            <input
            className='name'
            placeholder='Name'
            type='text'
            name='name'
            className='name'
            required 
            maxLength='25'
            />
            </formgroup>
            <formgroup className='col-email'>
            <input
            className='email'
            placeholder='Email'
            type='email'
            name='email'
            required 
            maxLength='25'
            />
            </formgroup>
            <br />
            <br />
            <formgroup className='col-messsage'>
            <textarea
            className='message'
            placeholder='Message'
            type='text'
            name='message'
            required 
            maxLength='250'
            />
          </formgroup>
          <br />
          <button className='submit'> Submit</button>
          </form>
          </div> 
          </div>
          </div>
          </section>
          </div>
    );
  }
}

export default Contact;