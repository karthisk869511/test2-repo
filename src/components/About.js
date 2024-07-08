import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="container about-page">
      <div className="row">
        <div className="col-12 text-center">
          <h1>About Me</h1>
          <p className="lead">Get to know more about my journey, skills, and interests.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2>Introduction</h2>
          <p>
            I'm a passionate developer with a love for creating dynamic and responsive web applications.
            With a background in both frontend and backend development, I enjoy working on projects that
            challenge me to learn and grow.
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/cyber_security_vs_software_engineering.jpg" alt="About Me" className="img-fluid rounded" />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>Skills</h2>
          <div className="skills">
            <div className="skill"><FaHtml5 size={48} /><p>HTML5</p></div>
            <div className="skill"><FaCss3Alt size={48} /><p>CSS3</p></div>
            <div className="skill"><FaJs size={48} /><p>JavaScript</p></div>
            <div className="skill"><FaReact size={48} /><p>React</p></div>
            <div className="skill"><FaNodeJs size={48} /><p>Node.js</p></div>
            <div className="skill"><FaDatabase size={48} /><p>Database</p></div>
            <div className="skill"><FaLaptopCode size={48} /><p>Development</p></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2>Experience</h2>
          <ul className="timeline">
            <li>
              <h3>Company Name</h3>
              <p>Position - Duration</p>
              <p>Brief description of your role and responsibilities.</p>
            </li>
            <li>
              <h3>Company Name</h3>
              <p>Position - Duration</p>
              <p>Brief description of your role and responsibilities.</p>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Education</h2>
          <ul className="timeline">
            <li>
              <h3>University Name</h3>
              <p>Degree - Duration</p>
              <p>Brief description of your studies and achievements.</p>
            </li>
            <li>
              <h3>University Name</h3>
              <p>Degree - Duration</p>
              <p>Brief description of your studies and achievements.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>Hobbies & Interests</h2>
          <p>
            When I'm not coding, I enjoy spending my time exploring new technologies, reading tech blogs,
            and participating in hackathons. I also have a keen interest in photography, traveling, and
            playing the guitar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
