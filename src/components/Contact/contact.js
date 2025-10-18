import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("✅ Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", number: "", message: "" });
  };

  return (
    <Container
  fluid
  className="contact-section py-5"
  style={{
    paddingTop: "100px",
    background: "rgba(255,255,255,0.05)",  // 👈 background here
    minHeight: "100vh",
    color: "#fff",
  }}
>

      <Container>
        <h2
          className="text-center mb-4 fw-bold"
          style={{ fontSize: "2.5rem", color: "#fff" }}
        >
          ✨ Contact Me ✨
        </h2>
        <p className="text-center mb-5" style={{ fontSize: "1.1rem" }}>
          Have a project or question? Fill out the form below, or reach me
          anytime via <strong>Instagram</strong>, <strong>WhatsApp</strong>, or{" "}
          <strong>Email</strong>.
        </p>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card
              className="p-4 shadow-lg"
              style={{
                borderRadius: "20px",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                color: "#fff",
              }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>
                    <FaUser className="me-2" /> Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>
                    <FaEnvelope className="me-2" /> Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNumber">
                  <Form.Label>
                    <FaPhone className="me-2" /> Phone Number
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>
                    <FaRegCommentDots className="me-2" /> Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    type="submit"
                    style={{
                      background:
                        "linear-gradient(135deg, #ff4b2b, #ff416c)",
                      border: "none",
                      padding: "10px 30px",
                      fontSize: "1.1rem",
                      borderRadius: "30px",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  >
                    🚀 Submit
                  </Button>
                </div>
              </Form>

              {/* Social Links */}
              <div className="text-center mt-4">
                <h5>Or Connect With Me</h5>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a
                    href="https://www.instagram.com/bloomdigiweb_"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#fff",
                      fontSize: "1.8rem",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#E1306C")}
                    onMouseOut={(e) => (e.target.style.color = "#fff")}
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://wa.me/919356708881"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#fff",
                      fontSize: "1.8rem",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#25D366")}
                    onMouseOut={(e) => (e.target.style.color = "#fff")}
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bloomdigiweb0"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#fff",
                      fontSize: "1.8rem",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#0A66C2")}
                    onMouseOut={(e) => (e.target.style.color = "#fff")}
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
