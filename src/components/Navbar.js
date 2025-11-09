import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../resources/logo.jpeg";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky shadow-sm" : "navbar"}
      style={{
        transition: "all 0.4s ease",
        padding: navColour ? "10px 0" : "20px 0",
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="brand"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "10px",
              border: "2px solid white",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.2)",
            }}
          />
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              letterSpacing: "1px",
            }}
          >
           Bloomdigiweb
          </span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* Navbar Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                style={linkStyle}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                style={linkStyle}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/service"
                onClick={() => updateExpanded(false)}
                style={linkStyle}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Services
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
                style={linkStyle}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Navbar link styles
const linkStyle = {
  color: "white",
  fontWeight: "500",
  margin: "0 10px",
  fontSize: "1rem",
  transition: "0.3s",
};

export default NavBar;
