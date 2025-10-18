import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I'M <span className="purple">AISHWARYA HANUMANT JADHAV </span>
            from <span className="purple"> Pune, Maharashtra, India.</span>
            <br />
            I’m passionate about blending technology with creativity to help businesses succeed. 
            Over the years, I’ve explored different areas of IT and found my strength in 
            delivering digital solutions that truly make an impact.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Website Design & Development – Turning ideas into sleek, interactive, and mobile-friendly websites.
            </li>
            <li className="about-activity">
              <ImPointRight /> Online Growth & Marketing – Enhancing visibility with smart digital campaigns, SEO, and social media strategies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Business Software Solutions – Building tools that simplify workflows and help businesses operate smoothly.
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Security & Ethical Hacking – Safeguarding digital systems with proactive security measures.
            </li>
            <li className="about-activity">
              <ImPointRight /> Creative Branding & Graphics – Designing impactful visuals that make brands stand out.
            </li>
          </ul>

          <p style={{ marginTop: "15px" }}>
            My goal is to combine these skills to create solutions that are not only technically strong but also user-friendly and business-focused. 🚀
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
