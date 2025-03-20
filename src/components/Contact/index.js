import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';


const Contact = () => {
  return (
    <div className='d-flex justify-content-center mt-5'>
      <div id="contact" className="contact">
      <p className='contact-head1'>GET IN TOUCH</p>
      <h2 className='contact-head2'>Contact Me</h2>
      <form className='form-details'>
        <label>Your Name:</label>
        <input className='input-box' type="text" placeholder="Your Name" required />
        <label>Your Email:</label>
        <input  className='input-box' type="email" placeholder="Your Email" required />
        <label>Message:</label>
        <textarea  className='input-box1' placeholder="Your Message" required></textarea>
        <button className='btn btn-success text-white' type="submit">Send Message</button>
      </form>
    </div> 
    </div>
  );
}

export default Contact;