import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FaLaptopCode, FaBullhorn, FaInstagram, FaShieldAlt, FaCogs, FaPalette } from "react-icons/fa";
import girlImg from "../../resources/girl.png"; // change path if needed
import Particle from "../Particle"; // keep if you want the particle background

function Home() {
  // Typewriter component
  const Type = () => (
    <Typewriter
      options={{
        strings: ["Software Developer", "Web Developer", "Digital Marketing"],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );

  return (
    <section>
      {/* Main Home Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">AISHWARYA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={girlImg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Services Section (Home2) */}
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={9} className="home-about-description">
              <h1 className="text-center mb-4" style={{ fontSize: "2.6em", fontWeight: "bold" }}>
                <span className="purple"> Services I Offer </span>
              </h1>

              <ul
                className="services-list"
                style={{ listStyle: "none", padding: 0, lineHeight: "2rem" }}
              >
                <li>
                  <FaLaptopCode style={{ color: "#6f42c1", marginRight: "10px" }} />
                  <strong>Website Designing</strong> – Modern, responsive, and user-friendly websites.
                </li>
                <li>
                  <FaCogs style={{ color: "#fd7e14", marginRight: "10px" }} />
                  <strong>ERP Software</strong> – Efficient solutions to manage business operations.
                </li>
                <li>
                  <FaBullhorn style={{ color: "#20c997", marginRight: "10px" }} />
                  <strong>Digital Marketing</strong> – Smart strategies to grow your business online.
                </li>
                <li>
                  <FaPalette style={{ color: "#d63384", marginRight: "10px" }} />
                  <strong>Social Media Marketing</strong> – Strong brand presence across all platforms.
                </li>
                <li>
                  <FaInstagram style={{ color: "#e4405f", marginRight: "10px" }} />
                  <strong>Instagram Marketing</strong> – Creative content to boost reach & engagement.
                </li>
                <li>
                  <FaShieldAlt style={{ color: "#0d6efd", marginRight: "10px" }} />
                  <strong>Cybersecurity & Ethical Hacking</strong> – Securing systems & protecting data.
                </li>
              </ul>
            </Col>
          </Row>

          
        </Container>
      </Container>
    </section>
  );
}

export default Home;
