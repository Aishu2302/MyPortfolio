import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiCanva,
  SiWordpress,
  SiMicrosoftexcel,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
  SiMysql,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftword/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftpowerpoint/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql/>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>
    </Row>
  );
}

export default Toolstack;