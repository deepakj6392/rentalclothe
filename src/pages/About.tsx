import { Container, Row, Col, Card, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col md={7}>
          <h2 className="mb-3" style={{ color: "#2D5A88" }}>About RentalClothes</h2>
          <p>
            <strong>RentalClothes</strong> was founded with a vision to make fashion accessible, sustainable, and affordable for everyone. Our journey began in 2022, when our founder, Deepak Jaiswal, noticed the growing need for eco-friendly fashion solutions and the desire for variety without the burden of ownership.
          </p>
          <p>
            We believe that everyone deserves to look their best for every occasion, without compromising the planet or their wallet. Our platform connects people with a wide range of clothing and accessories for rent, making it easy to dress up for weddings, parties, business meetings, and more.
          </p>
          <h4 className="mt-4" style={{ color: "#2D5A88" }}>Our Journey</h4>
          <ul>
            <li><strong>2022:</strong> Idea conceptualized and initial team formed.</li>
            <li><strong>2023:</strong> Platform launched in Mumbai with 100+ curated outfits.</li>
            <li><strong>2024:</strong> Expanded to multiple cities and introduced accessories rental.</li>
            <li><strong>2025:</strong> Serving thousands of happy customers and growing every day!</li>
          </ul>
          <p>
            Our mission is to empower people to express themselves through fashion, while promoting a circular economy and reducing textile waste.
          </p>
        </Col>
        <Col md={5} className="d-flex align-items-center justify-content-center">
          <Card className="shadow border-0" style={{ maxWidth: 320 }}>
            <Card.Body className="text-center">
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                roundedCircle
                width={120}
                height={120}
                alt="Deepak Jaiswal"
                className="mb-3"
              />
              <h5 style={{ color: "#2D5A88" }}>Deepak Jaiswal</h5>
              <p className="mb-1">Founder & CEO</p>
              <p>
                <a href="mailto:deepak@rentalclothes.com" style={{ color: "#2D5A88" }}>
                  deepak@rentalclothes.com
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/deepakjaiswal" target="_blank" rel="noopener noreferrer" style={{ color: "#2D5A88" }}>
                  LinkedIn Profile
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="mb-4" style={{ color: "#2D5A88" }}>Meet the Team</h4>
        </Col>
      </Row>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow border-0 text-center">
            <Card.Body>
              <Image
                src="https://randomuser.me/api/portraits/women/65.jpg"
                roundedCircle
                width={90}
                height={90}
                alt="Priya Sharma"
                className="mb-3"
              />
              <h6 style={{ color: "#2D5A88" }}>Priya Sharma</h6>
              <p>Chief Operating Officer</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow border-0 text-center">
            <Card.Body>
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                roundedCircle
                width={90}
                height={90}
                alt="Amit Verma"
                className="mb-3"
              />
              <h6 style={{ color: "#2D5A88" }}>Amit Verma</h6>
              <p>Lead Developer</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow border-0 text-center">
            <Card.Body>
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                roundedCircle
                width={90}
                height={90}
                alt="Sneha Patel"
                className="mb-3"
              />
              <h6 style={{ color: "#2D5A88" }}>Sneha Patel</h6>
              <p>Marketing Head</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h4 style={{ color: "#2D5A88" }}>Why Choose RentalClothes?</h4>
          <ul>
            <li>Wide range of premium outfits and accessories for every occasion</li>
            <li>Affordable rental plans and easy returns</li>
            <li>Eco-friendly and sustainable fashion choices</li>
            <li>Excellent customer support</li>
            <li>Trusted by thousands of happy customers</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;