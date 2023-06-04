import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={9} className="home-about-description">
            {/* Rest of your code */}
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm excited to have this opportunity to introduce myself as an aspiring web developer.              <br />
              <br />During my education, I focused on learning the fundamentals of 
              <i>
                <b className="purple"> HTML,CSS and Javascript </b>
              </i>    
              which form the core of web development. 
              <br />
              <br />
              I also familiarized myself with popular frameworks and libraries such as  
              <i>
                <b className="purple">React and Bootstrap </b>
              </i>
              to create dynamic and responsive websites.
              <br />
              <br />
              As a fresher, I bring a fresh perspective, a strong work ethic,
               and a genuine passion for web development. 
               I am eager to contribute my creativity, attention to detail,
                and problem-solving abilities to a dynamic team or organization.
             
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Aishu2302"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
    <a
      href="aishwaryahjadhav232@gmail.com"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiOutlineMail />
    </a>
  </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aishwaryahjadhav2000/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aishu_000_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >

               <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
