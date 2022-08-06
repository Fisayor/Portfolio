import React from 'react'
import { Button } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';


const Header = () => {
  return (
    // <div className="nav">
      <NavbarToggle background-color="#1A1215">
        <Button variant="outline-secondary">
          <a href="#about" color='black'>About</a>
        </Button>{" "}
        <Button variant="outline-secondary">
          {" "}
          <a href="#experience">Experience</a>
        </Button>{" "}
        <Button variant="outline-secondary">
          <a href="#contact">Contact</a>
        </Button>{" "}
      </NavbarToggle>
    // </div>
  );
}

export default Header
