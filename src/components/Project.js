import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa';

const Project = () => {
  return (
    <div className="container project-page" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <div className="row">
        <div className="col-12 text-center">
          <h1>My Projects</h1>
          <p className="lead">Explore some of my recent projects and contributions.</p>
        </div>
      </div>

      <div className="row"  style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="col-md-6">
          <h2>Project 1</h2>
          <p>
            Description of your project. Highlight its purpose, technologies used, and any unique features.
          </p>
          <p>
            Technologies used: <FaReact /> React, <FaNodeJs /> Node.js, <FaDatabase /> MongoDB
          </p>
          <p>
            <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">
              <FaGithub /> View on GitHub
            </a>
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/400" alt="Project 1" className="img-fluid rounded" />
        </div>
      </div>

      <div className="row"  style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="col-md-6">
          <h2>Project 2</h2>
          <p>
            Description of your project. Highlight its purpose, technologies used, and any unique features.
          </p>
          <p>
            Technologies used: <FaReact /> React, <FaNodeJs /> Node.js, <FaDatabase /> PostgreSQL
          </p>
          <p>
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
              <FaGithub /> View on GitHub
            </a>
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/400" alt="Project 2" className="img-fluid rounded" />
        </div>
      </div>

     
    </div>
  );
};

export default Project;
