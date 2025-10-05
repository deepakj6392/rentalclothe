import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col md={7}>
          <h2 className="mb-3" style={{ color: "#2D5A88" }}>Contact Us</h2>
          <p>
            Have questions, feedback, or need support? Fill out the form below or reach us using the details provided. Our team will get back to you as soon as possible!
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type your message..." required />
            </Form.Group>
            <Button variant="primary" type="submit" className="px-4">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={5} className="mt-4 mt-md-0">
          <Card className="mb-4">
            <Card.Body>
              <h5 className="mb-3" style={{ color: "#2D5A88" }}>Support Details</h5>
              <p>
                <strong>Email:</strong> <a href="mailto:support@rentalclothes.com">support@rentalclothes.com</a><br />
                <strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a><br />
                <strong>Address:</strong><br />
                123 Fashion Street,<br />
                Mumbai, Maharashtra 400001<br />
                India
              </p>
              <p>
                <strong>Support Hours:</strong><br />
                Mon - Fri: 9:00 AM - 7:00 PM<br />
                Sat: 10:00 AM - 4:00 PM
              </p>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body style={{ padding: 0 }}>
              <iframe
                title="Rental Clothes Location"
                src="https://www.google.com/maps?q=Mumbai,+Maharashtra,+India&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;