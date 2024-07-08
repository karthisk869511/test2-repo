import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Me</h5>
            <p>
            I am a passionate developer with expertise in various technologies such as React, Node.js, and MongoDB.
              I enjoy building responsive web applications that solve real-world problems. In addition to coding, I love
              writing about technology and sharing my knowledge with others.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects" >Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                  <FaTwitter size={24} /> Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                  <FaLinkedin size={24} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                  <FaGithub size={24} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr style={{ backgroundColor: '#fff' }} />
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
 
  );
};

export default Footer;
