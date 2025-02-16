import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              MyApp is a leading platform providing top-notch services to users worldwide. 
              We focus on quality and customer satisfaction.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#features" className="text-light">Features</a></li>
              <li><a href="#pricing" className="text-light">Pricing</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="#facebook" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#twitter" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#instagram" className="text-light me-3"><i className="bi bi-instagram"></i></a>
              <a href="#linkedin" className="text-light"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} MyApp. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
