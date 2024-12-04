import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";
import Logo from "../../Assets/logo.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar bgcolor1 fixed-top">
      <Container fluid>
        <Navbar.Brand href="/" className="logo">
          <img src={Logo} alt="TaskPulse Logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto nav-links gap-item" navbarScroll>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="nav-link text-light"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="nav-link text-light"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="nav-link text-light"
            >
              About us
            </ScrollLink>
            <ScrollLink
              to="task-list"
              smooth={true}
              duration={500}
              className="nav-link text-light"
            >
              Task List
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              className="nav-link text-light"
            >
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link text-light"
            >
              Contact us
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;