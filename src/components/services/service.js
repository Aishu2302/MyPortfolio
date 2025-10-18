import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaLaptopCode,
  FaBullhorn,
  FaNetworkWired,
  FaShieldAlt,
  FaPalette,
  FaSearch,
  FaShareAlt,
  FaLightbulb,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={50} color="#0d6efd" />,
      title: "Web Development",
      description: "Building modern, responsive, and user-friendly websites.",
    },
    {
      icon: <FaBullhorn size={50} color="#e83e8c" />,
      title: "Digital Marketing",
      description: "Boosting online presence with targeted ads & campaigns.",
    },
    {
      icon: <FaNetworkWired size={50} color="#20c997" />,
      title: "ERP Software",
      description: "Developing smart solutions to manage business operations.",
    },
    {
      icon: <FaShieldAlt size={50} color="#6610f2" />,
      title: "Cybersecurity & Ethical Hacking",
      description: "Securing systems, finding vulnerabilities, and protecting data.",
    },
    {
      icon: <FaPalette size={50} color="#fd7e14" />,
      title: "Graphic Designing",
      description: "Designing logos, posters, and creative visuals for your brand.",
    },
    {
      icon: <FaSearch size={50} color="#198754" />,
      title: "SEO Optimization",
      description: "Improving search rankings and driving organic website traffic.",
    },
    {
      icon: <FaShareAlt size={50} color="#0dcaf0" />,
      title: "Social Media Marketing",
      description: "Building brand awareness and engagement on all platforms.",
    },
    {
      icon: <FaLightbulb size={50} color="#ffc107" />,
      title: "Brand Strategy",
      description: "Helping you define your brand voice and digital presence.",
    },
  ];

  return (
    <Container className="services-section py-5 text-white">
      <h2 className="text-center mb-5 fw-bold" style={{ fontSize: "2.5rem" }}>
        🌟 What I Do 🌟
      </h2>
      <Row className="justify-content-center">
        {services.map((service, index) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
            <Card
              className="service-card text-center p-4 h-100 shadow-lg"
              style={{
                borderRadius: "20px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="mb-3">{service.icon}</div>
              <h4 className="fw-bold">{service.title}</h4>
              <p>{service.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
