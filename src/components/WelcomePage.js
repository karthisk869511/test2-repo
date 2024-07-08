import React, { useState, useEffect } from 'react';
import devImage from '../images/devImage.png'; 
import './WelcomePage.css';
import debounce from 'lodash.debounce';
import { FaLinkedin, FaTwitter, FaGithub, FaBook } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const WelcomePage = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedMessage, setDisplayedMessage] = useState("");

  const messages = ["UI Developer", "Backend Developer", "Frontend Developer"];

  useEffect(() => {
    const showMessage = () => {
      const messageToShow = messages[currentMessageIndex];
      for (let i = 0; i <= messageToShow.length; i++) {
        setTimeout(() => {
          setDisplayedMessage(messageToShow.substring(0, i));
        }, 100 * i); 
      }
    };

    const hideMessage = () => {
      const messageToHide = messages[currentMessageIndex];
      for (let i = messageToHide.length; i >= 0; i--) {
        setTimeout(() => {
          setDisplayedMessage(messageToHide.substring(0, i));
        }, 50 * (messageToHide.length - i)); 
      }
    };

    const interval = setInterval(() => {
      showMessage();
      setTimeout(() => {
        hideMessage();
      }, 100 * messages[currentMessageIndex].length + 1000); 
      setCurrentMessageIndex((currentMessageIndex + 1) % messages.length); 
    }, 2500); 

    return () => clearInterval(interval); 
  }, [currentMessageIndex, messages]);

  return (
    <div className='welbox'>
      <div className='welmes'>
        <div className='greet'>
          <h1>Hi, I'm karthi</h1>
        </div>
        
        <div className='devmes'>{displayedMessage}</div>
        
        <div className='touchin'>
          <div className='recrt'>
            <button className="btn btn-warning">Resume</button>
            <button className="btn btn-warning">Hire me</button>
          </div>

          <div className='socicon'>
            <FaLinkedin size={24} /> <FaTwitter size={24} /> <FaGithub size={24} /> <FaBook size={24} />
          </div>
        </div>
      </div>

      <div className='devimage'>
        <img src={devImage} alt="Developer" />
      </div>
    </div>
  );
};

export default WelcomePage;