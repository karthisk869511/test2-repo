import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi'; 
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/" className="portfolio">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <GiHamburgerMenu className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto align-items-center flex-column flex-lg-row">
                <Nav.Link as={Link} to="/home" className="custom-nav-link">Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className="custom-nav-link">About</Nav.Link>
                <Nav.Link as={Link} to="/project" className="custom-nav-link">Project</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="custom-nav-link">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};
  
export default Header;
