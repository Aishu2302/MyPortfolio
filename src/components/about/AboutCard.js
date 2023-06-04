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
            <br /> I have graduated from SNDT Women's University Pune with First Class.
            <br />
            Additionally, I am currently doing course as Junior Java Full Stack Developer in Amber Project whose trainer is Vinsys IT services. 
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>


          {/* <footer className="blockquote-footer">Adarsh</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;