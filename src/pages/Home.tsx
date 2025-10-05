import { Container, Row, Col, Button, Carousel, Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const rentedItems = [
  {
    title: "Classic Tuxedo",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: "₹799 / day",
    category: "Men's Wear",
    rentedBy: "Amit Sharma",
    rentedOn: "2025-09-28",
  },
  {
    title: "Designer Saree",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
    price: "₹699 / day",
    category: "Women's Wear",
    rentedBy: "Priya Singh",
    rentedOn: "2025-09-30",
  },
  {
    title: "Party Dress",
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    price: "₹399 / day",
    category: "Kids' Wear",
    rentedBy: "Rohit Verma",
    rentedOn: "2025-09-25",
  },
  {
    title: "Evening Gown",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    price: "₹899 / day",
    category: "Women's Wear",
    rentedBy: "Sneha Patel",
    rentedOn: "2025-09-27",
  },
];

const categories = [
  {
    name: "Men's Wear",
    items: [
      {
        title: "Classic Tuxedo",
        img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
        price: "₹799 / day",
      },
      {
        title: "Wedding Sherwani",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        price: "₹999 / day",
      },
      {
        title: "Casual Blazer",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        price: "₹499 / day",
      },
    ],
  },
  {
    name: "Women's Wear",
    items: [
      {
        title: "Designer Saree",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
        price: "₹699 / day",
      },
      {
        title: "Evening Gown",
        img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
        price: "₹899 / day",
      },
      {
        title: "Lehenga Choli",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        price: "₹1099 / day",
      },
    ],
  },
  {
    name: "Kids' Wear",
    items: [
      {
        title: "Party Dress",
        img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
        price: "₹399 / day",
      },
      {
        title: "Ethnic Kurta Set",
        img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80",
        price: "₹349 / day",
      },
      {
        title: "Birthday Frock",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
        price: "₹299 / day",
      },
    ],
  },
];

const reviews = [
  {
    name: "Amit Sharma",
    item: "Classic Tuxedo",
    review: "The tuxedo was in perfect condition and fit me really well. Great service!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    item: "Designer Saree",
    review: "Loved the saree! It looked exactly like the pictures and was delivered on time.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Sneha Patel",
    item: "Evening Gown",
    review: "Beautiful gown and very easy rental process. Will rent again!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rohit Verma",
    item: "Party Dress",
    review: "My daughter loved the dress for her birthday. Thank you!",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const renderStars = (count: number) =>
  Array.from({ length: 5 }).map((_, i) =>
    i < count ? (
      <i key={i} className="bi bi-star-fill text-warning" />
    ) : (
      <i key={i} className="bi bi-star text-warning" />
    )
  );

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e3e9f7 100%)",
          minHeight: "100vh",
        }}
      >
        <Container className="pt-5">
          {/* Hero Carousel */}
          <Carousel
            className="mb-5 rounded shadow overflow-hidden animate__animated animate__fadeIn"
            style={{ maxHeight: 420 }}
            indicators={false}
            interval={3500}
            fade
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
                alt="Trendy Outfits"
                style={{ objectFit: "cover", height: 400, filter: "brightness(0.85)" }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3 shadow-lg">
                <h2 className="fw-bold text-warning animate__animated animate__fadeInDown">Rent the Latest Styles</h2>
                <p className="lead animate__animated animate__fadeInUp">Look your best for every occasion without breaking the bank.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
                alt="Designer Dresses"
                style={{ objectFit: "cover", height: 400, filter: "brightness(0.85)" }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3 shadow-lg">
                <h2 className="fw-bold text-warning animate__animated animate__fadeInDown">Designer Dresses for Less</h2>
                <p className="lead animate__animated animate__fadeInUp">Choose from a wide range of premium brands and styles.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
                alt="Easy Returns"
                style={{ objectFit: "cover", height: 400, filter: "brightness(0.85)" }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3 shadow-lg">
                <h2 className="fw-bold text-warning animate__animated animate__fadeInDown">Easy Rental & Returns</h2>
                <p className="lead animate__animated animate__fadeInUp">Enjoy hassle-free delivery and returns at your doorstep.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* Welcome Section */}
          <section id="home" className="text-center py-5">
            <h1 className="fw-bold mb-3 animate__animated animate__fadeInDown" style={{ color: "#2D5A88", fontSize: "2.8rem", letterSpacing: 1 }}>
              Welcome to <span style={{ color: "#F9A826" }}>RentMyStyle</span>
            </h1>
            <p className="lead mb-4 animate__animated animate__fadeInUp" style={{ color: "#555", fontSize: "1.3rem" }}>
              Your one-stop destination for renting fashionable clothes for every event.
            </p>
            <Button
              variant="warning"
              size="lg"
              className="px-5 py-2 shadow animate__animated animate__pulse animate__infinite"
              onClick={() => navigate("/clothes")}
              style={{
                background: "linear-gradient(90deg, #F9A826 60%, #FFD580 100%)",
                border: "none",
                borderRadius: 12,
                color: "#2D5A88",
                fontWeight: 700,
                fontSize: "1.2rem",
              }}
            >
              Get Started
            </Button>
          </section>

          {/* Rented Items Section */}
          <section id="rented-items" className="py-5">
            <h2 className="fw-bold text-center mb-5" style={{ color: "#2D5A88" }}>
              <i className="bi bi-stars me-2 text-warning" />Recently Rented Items
            </h2>
            <Row className="g-4 justify-content-center">
              {rentedItems.map((item, idx) => (
                <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                  <Card className="h-100 shadow-sm border-0 animate__animated animate__zoomIn">
                    <div style={{ position: "relative" }}>
                      <Card.Img
                        variant="top"
                        src={item.img}
                        alt={item.title}
                        style={{
                          height: 200,
                          objectFit: "cover",
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                          transition: "transform 0.3s",
                        }}
                        className="hover-zoom"
                      />
                      <Badge
                        bg="success"
                        style={{
                          position: "absolute",
                          top: 10,
                          left: 10,
                          fontSize: 12,
                          padding: "0.4em 0.7em",
                          borderRadius: 6,
                        }}
                      >
                        Rented
                      </Badge>
                    </div>
                    <Card.Body>
                      <Card.Title className="fw-bold" style={{ color: "#2D5A88" }}>{item.title}</Card.Title>
                      <Card.Text className="mb-1">
                        <span className="fw-semibold">{item.price}</span>
                      </Card.Text>
                      <Card.Text className="mb-1">
                        <span className="text-muted small">{item.category}</span>
                      </Card.Text>
                      <Card.Text className="mb-1">
                        <span className="text-muted small">Rented by: {item.rentedBy}</span>
                      </Card.Text>
                      <Card.Text className="mb-0">
                        <span className="text-muted small">On: {item.rentedOn}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          {/* Categories Section */}
          <section id="categories" className="py-5">
            <h2 className="fw-bold text-center mb-5" style={{ color: "#2D5A88" }}>
              <i className="bi bi-grid-3x3-gap-fill me-2 text-warning" />Browse Categories
            </h2>
            <Row className="g-4">
              {categories.map((cat, i) => (
                <Col md={4} key={cat.name}>
                  <Card className="h-100 shadow-sm border-0 animate__animated animate__fadeInUp" style={{ animationDelay: `${i * 0.1 + 0.1}s` }}>
                    <Card.Body>
                      <h4 className="fw-bold mb-4 text-center" style={{ color: "#2D5A88" }}>{cat.name}</h4>
                      <Row className="g-3">
                        {cat.items.map((item) => (
                          <Col xs={12} key={item.title}>
                            <Card className="mb-2 border-0" style={{ background: "#f8f9fa" }}>
                              <Row className="g-0 align-items-center">
                                <Col xs={4}>
                                  <img
                                    src={item.img}
                                    alt={item.title}
                                    className="img-fluid rounded"
                                    style={{
                                      height: 60,
                                      objectFit: "cover",
                                      boxShadow: "0 2px 8px rgba(41, 98, 255, 0.07)",
                                    }}
                                  />
                                </Col>
                                <Col xs={8}>
                                  <div className="ps-2">
                                    <div className="fw-semibold">{item.title}</div>
                                    <div className="text-muted small">{item.price}</div>
                                  </div>
                                </Col>
                              </Row>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          {/* About Section */}
          <section id="about" className="py-5">
            <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-0">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                  alt="About Us"
                  className="img-fluid rounded shadow animate__animated animate__fadeInLeft"
                />
              </Col>
              <Col md={6}>
                <h2 className="fw-bold mb-3" style={{ color: "#2D5A88" }}>About Us</h2>
                <p style={{ color: "#555", fontSize: "1.1rem" }}>
                  At <span className="fw-bold" style={{ color: "#F9A826" }}>RentMyStyle</span>, we believe everyone deserves to look their best. We offer a curated collection of trendy and designer outfits for rent, making fashion accessible and sustainable. Whether it's a wedding, party, or business event, we've got you covered!
                </p>
              </Col>
            </Row>
          </section>

          {/* Services Section */}
          <section id="services" className="py-5" style={{ background: "#f4f6fa", borderRadius: 18 }}>
            <h2 className="fw-bold text-center mb-5" style={{ color: "#2D5A88" }}>
              <i className="bi bi-stars me-2 text-warning" />Why Choose Us?
            </h2>
            <Row className="g-4">
              <Col md={4}>
                <Card className="h-100 shadow-sm border-0 animate__animated animate__fadeInUp">
                  <Card.Body className="text-center">
                    <div className="mb-3">
                      <i className="bi bi-bag-check-fill" style={{ fontSize: 40, color: "#F9A826" }}></i>
                    </div>
                    <Card.Title className="fw-bold">Wide Collection</Card.Title>
                    <Card.Text>
                      Choose from the latest trends, designer labels, and classic styles for all occasions.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100 shadow-sm border-0 animate__animated animate__fadeInUp" style={{ animationDelay: "0.1s" }}>
                  <Card.Body className="text-center">
                    <div className="mb-3">
                      <i className="bi bi-truck" style={{ fontSize: 40, color: "#F9A826" }}></i>
                    </div>
                    <Card.Title className="fw-bold">Fast Delivery</Card.Title>
                    <Card.Text>
                      Get your outfit delivered to your doorstep quickly and reliably, anywhere in the city.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100 shadow-sm border-0 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
                  <Card.Body className="text-center">
                    <div className="mb-3">
                      <i className="bi bi-arrow-repeat" style={{ fontSize: 40, color: "#F9A826" }}></i>
                    </div>
                    <Card.Title className="fw-bold">Easy Returns</Card.Title>
                    <Card.Text>
                      Enjoy hassle-free returns and cleaning—just wear, return, and repeat!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-5">
            <h2 className="fw-bold text-center mb-4" style={{ color: "#2D5A88" }}>
              <i className="bi bi-envelope-paper-heart me-2 text-warning" />Contact Us
            </h2>
            <Row className="justify-content-center">
              <Col md={6}>
                <Card className="shadow border-0 animate__animated animate__fadeInUp">
                  <Card.Body>
                    <Row className="align-items-center mb-3">
                      <Col xs="auto">
                        <i className="bi bi-envelope-fill text-primary" style={{ fontSize: 28 }} />
                      </Col>
                      <Col>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:support@rentmystyle.com" style={{ color: "#2D5A88" }}>
                          support@rentmystyle.com
                        </a>
                      </Col>
                    </Row>
                    <Row className="align-items-center mb-3">
                      <Col xs="auto">
                        <i className="bi bi-telephone-fill text-success" style={{ fontSize: 28 }} />
                      </Col>
                      <Col>
                        <strong>Phone:</strong>{" "}
                        <a href="tel:+1234567890" style={{ color: "#2D5A88" }}>
                          +123 456 7890
                        </a>
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <i className="bi bi-geo-alt-fill text-danger" style={{ fontSize: 28 }} />
                      </Col>
                      <Col>
                        <strong>Address:</strong> 123 Fashion Street, Style City
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="py-5">
            <h2 className="fw-bold text-center mb-5" style={{ color: "#2D5A88" }}>
              <i className="bi bi-emoji-smile me-2 text-warning" />What Our Customers Say
            </h2>
            <Row className="g-4 justify-content-center">
              {reviews.map((review, idx) => (
                <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                  <Card className="h-100 shadow-sm border-0 animate__animated animate__fadeInUp">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={review.img}
                          alt={review.name}
                          className="rounded-circle me-3"
                          style={{
                            width: 48,
                            height: 48,
                            objectFit: "cover",
                            border: "2px solid #2D5A88",
                            boxShadow: "0 2px 8px rgba(41, 98, 255, 0.07)",
                          }}
                        />
                        <div>
                          <div className="fw-bold" style={{ color: "#2D5A88" }}>{review.name}</div>
                          <div className="small text-muted">{review.item}</div>
                        </div>
                      </div>
                      <div className="mb-2">{renderStars(review.rating)}</div>
                      <Card.Text className="fst-italic" style={{ color: "#555" }}>
                        "{review.review}"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        </Container>
        {/* Extra: Add a subtle floating animation for .hover-zoom images */}
        <style>{`
          .hover-zoom:hover {
            transform: scale(1.04);
            box-shadow: 0 8px 32px rgba(41,98,255,0.10);
            transition: transform 0.3s, box-shadow 0.3s;
          }
        `}</style>
      </div>
    </>
  );
};

export default Home;
