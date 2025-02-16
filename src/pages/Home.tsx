import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="mt-5">
        <Carousel className="mb-5">
          <Carousel.Item>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
            <Carousel.Caption>
              <h3>First Slide</h3>
              <p>Discover the best services with us.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
            <Carousel.Caption>
              <h3>Second Slide</h3>
              <p>Quality solutions tailored to your needs.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
            <Carousel.Caption>
              <h3>Third Slide</h3>
              <p>Experience excellence with us.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <section id="home" className="text-center py-5">
          <h1>Welcome to MyApp</h1>
          <p>Your one-stop solution for all your needs.</p>
          <Button variant="primary">Get Started</Button>
        </section>

        <section id="about" className="py-5">
          <h2>About Us</h2>
          <p>We are dedicated to providing the best services to our customers.</p>
        </section>

        <section id="services" className="py-5 bg-light">
          <h2>Our Services</h2>
          <Row>
            <Col md={4}>
              <h4>Service 1</h4>
              <p>High-quality service tailored to your needs.</p>
            </Col>
            <Col md={4}>
              <h4>Service 2</h4>
              <p>Reliable and efficient solutions.</p>
            </Col>
            <Col md={4}>
              <h4>Service 3</h4>
              <p>Customer satisfaction guaranteed.</p>
            </Col>
          </Row>
        </section>

        <section id="contact" className="py-5">
          <h2>Contact Us</h2>
          <p>Email: support@myapp.com</p>
          <p>Phone: +123 456 7890</p>
        </section>
      </Container>
    </>
  );
};

export default Home;
