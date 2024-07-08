import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container contact-page">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Contact Me</h1>
          <p className="lead">Feel free to reach out. I'm available for opportunities and collaborations.</p>
        </div>
      </div>

      <div className="row" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="col-md-6">
          <h2>Get In Touch</h2>
          <p>
            Let's connect and discuss how we can work together. Whether you have a project in mind or just want to say hi,
            I'd love to hear from you.
          </p>
          <ul className="contact-info">
            <li><FaEnvelope /> Email: yourname@example.com</li>
            <li><FaPhone /> Phone: +1234567890</li>
            <li><FaMapMarkerAlt /> Address: City, Country</li>
          </ul>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
