import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3> By Miss Aishwarya Jadhav</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Aishu2302"
                style={{ color: "white" }}
                target="_blank" 
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
           
          
    
            <li className="social-icons">
              <a
                href="https://www.instagram.com/bloomdigiweb_/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
  <a
    href="https://wa.me/919356708881"  
    style={{ color: "white" }}
    target="_blank"
    rel="noreferrer"
  >
    <AiOutlineWhatsApp />
  </a>
</li>


          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
