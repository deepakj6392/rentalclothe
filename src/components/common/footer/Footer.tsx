import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4" style={{ fontSize: "1.08rem" }}>
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h4 className="fw-bold mb-3" style={{ color: "#F9A826" }}>RentMyStyle</h4>
            <p>
              RentMyStyle is your trusted platform for renting premium and designer clothes for every occasion. We focus on quality, hygiene, and customer satisfaction, making fashion accessible and sustainable for all.
            </p>
            <div className="mt-3">
              <i className="bi bi-geo-alt-fill me-2 text-warning" /> 123 Fashion Street, Style City<br />
              <i className="bi bi-envelope-fill me-2 text-warning" /> <a href="mailto:support@rentmystyle.com" className="text-light">support@rentmystyle.com</a><br />
              <i className="bi bi-telephone-fill me-2 text-warning" /> <a href="tel:+1234567890" className="text-light">+123 456 7890</a>
            </div>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/clothes" className="text-light text-decoration-none">Browse Clothes</Link></li>
              <li><Link to="/#about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/#contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Information</h5>
            <ul className="list-unstyled">
              <li><Link to="/terms-and-conditions" className="text-light text-decoration-none">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy-policy" className="text-light text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/#reviews" className="text-light text-decoration-none">Customer Reviews</Link></li>
              <li><Link to="/#services" className="text-light text-decoration-none">Why Choose Us</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3">Stay Connected</h5>
            <p>Follow us on social media for updates, offers, and style inspiration:</p>
            <div className="d-flex mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4"><i className="bi bi-facebook"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4"><i className="bi bi-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4"><i className="bi bi-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4"><i className="bi bi-linkedin"></i></a>
            </div>
            <div>
              <span className="fw-semibold">Open Hours:</span> Mon-Sat 9:00am - 8:00pm
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0 small">
              &copy; {new Date().getFullYear()} RentMyStyle. All Rights Reserved. | Designed with <span className="text-danger">&hearts;</span> for fashion lovers.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
