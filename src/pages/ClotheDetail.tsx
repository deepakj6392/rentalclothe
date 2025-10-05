import React from "react";
import { Container, Row, Col, Carousel, Card, Badge, Button, Alert } from "react-bootstrap";
import SupportChat from "../components/SupportChat";
import { useNavigate } from "react-router-dom";

// Sample product data (replace with real data or fetch from API)
const product = {
  title: "Classic Tuxedo",
  images: [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
  ],
  price: 799,
  category: "Men's Wear",
  rented: true,
  colors: ["Black", "Navy"],
  sizes: ["M", "L", "XL"],
  description:
    "Look sharp and elegant in this classic tuxedo, perfect for weddings, parties, and formal events. Made from premium fabric for a comfortable fit and stylish look.",
  features: [
    "Premium quality fabric",
    "Available in multiple sizes",
    "Dry cleaned and sanitized",
    "Includes jacket, trousers, and bow tie",
  ],
  reviews: [
    {
      name: "Amit Sharma",
      rating: 5,
      comment: "Perfect fit and great quality. Highly recommended!",
    },
    {
      name: "Rohit Verma",
      rating: 4,
      comment: "Looked amazing at my event. Service was smooth.",
    },
  ],
};

// Sample related items (replace with real data or fetch from API)
const relatedItems = [
  {
    title: "Wedding Sherwani",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    price: 999,
    category: "Men's Wear",
    rented: false,
  },
  {
    title: "Casual Blazer",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: 499,
    category: "Men's Wear",
    rented: false,
  },
  {
    title: "Ethnic Kurta Set",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    price: 349,
    category: "Men's Wear",
    rented: false,
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

const ClotheDetail = () => {
  const navigate= useNavigate();
  return (
    <Container className="py-5">
      <Row className="g-5">
        {/* Image Carousel */}
        <Col md={6}>
          <Carousel className="shadow rounded">
            {product.images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="d-block w-100"
                  style={{ height: 400, objectFit: "cover", borderRadius: 12 }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Product Details */}
        <Col md={6}>
          <h2 className="fw-bold mb-2" style={{ color: "#2D5A88" }}>{product.title}</h2>
          <div className="mb-2">
            <Badge bg="secondary" className="me-2">{product.category}</Badge>
            {product.rented && (
              <Badge bg="success" className="me-2">Rented</Badge>
            )}
          </div>
          <h4 className="fw-bold mb-3" style={{ color: "#2D5A88" }}>₹{product.price} <span className="fs-6 fw-normal">/ day</span></h4>
          <div className="mb-3">
            <span className="fw-semibold">Colors: </span>
            {product.colors.map((color) => (
              <Badge key={color} bg="light" text="dark" className="me-1 border" style={{ fontSize: 13 }}>
                {color}
              </Badge>
            ))}
          </div>
          <div className="mb-3">
            <span className="fw-semibold">Sizes: </span>
            {product.sizes.map((size) => (
              <Badge key={size} bg="secondary" className="me-1" style={{ fontSize: 13 }}>
                {size}
              </Badge>
            ))}
          </div>
          <p className="mb-4" style={{ color: "#555" }}>{product.description}</p>
          <ul>
            {product.features.map((f, i) => (
              <li key={i} style={{ color: "#555" }}>{f}</li>
            ))}
          </ul>
          <Button variant="primary" size="lg" className="mt-3 px-4" style={{ background: "#2D5A88", border: "none", borderRadius: 8 }}
          onClick={() => navigate('/billing')}
           >
            Rent Now
          </Button>

         

          
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
         {/* Trust & Information Section */}
          <Alert variant="info" className="mt-4">
            <div className="fw-bold mb-2" style={{ color: "#2D5A88" }}>Why Rent With Us?</div>
            <ul className="mb-0 ps-3">
              <li>All clothes are professionally dry-cleaned and sanitized before every rental.</li>
              <li>100% genuine brands and quality assurance.</li>
              <li>Secure payment and easy cancellation policy.</li>
              <li>Responsive customer support for all your queries.</li>
            </ul>
          </Alert>
        {/* Rules & Regulations Section */}
          <Card className="mt-3 border-0 shadow-sm">
            <Card.Body>
              <div className="fw-bold mb-2" style={{ color: "#2D5A88" }}>Rental Rules & Regulations</div>
              <ul className="mb-0 ps-3" style={{ color: "#555" }}>
                <li>Clothes must be returned in the same condition as received.</li>
                <li>Late returns may incur additional charges.</li>
                <li>Any damage or stains may result in a penalty fee.</li>
                <li>Rental period starts from the day of delivery.</li>
                <li>Cancellation is allowed up to 24 hours before delivery for a full refund.</li>
              </ul>
            </Card.Body>
          </Card>

          {/* Website Standards Section */}
          <Card className="mt-3 border-0 shadow-sm">
            <Card.Body>
              <div className="fw-bold mb-2" style={{ color: "#2D5A88" }}>Our Website Standards</div>
              <ul className="mb-0 ps-3" style={{ color: "#555" }}>
                <li>We ensure transparency in pricing and rental terms.</li>
                <li>All listings are verified for authenticity and quality.</li>
                <li>Personal data is protected with industry-standard security.</li>
                <li>We are committed to sustainable and eco-friendly practices.</li>
                <li>Customer satisfaction and trust are our top priorities.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Alert variant="warning" className="mt-4">
            <div className="fw-bold mb-2" style={{ color: "#2D5A88" }}>Need Help?</div>
            <p className="mb-0" style={{ color: "#555" }}>
              If you have any questions about this product or the rental process, feel free to reach out to our customer support team. We're here to assist you!
            </p>
          </Alert>
        </Col>
      </Row>

      {/* Reviews */}
      <Row className="mt-5">
        <Col md={8}>
          <h4 className="fw-bold mb-4" style={{ color: "#2D5A88" }}>Customer Reviews</h4>
          {product.reviews.length === 0 && (
            <div className="text-muted">No reviews yet.</div>
          )}
          {product.reviews.map((review, idx) => (
            <Card key={idx} className="mb-3 shadow-sm border-0">
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <div className="fw-bold me-2">{review.name}</div>
                  <div>{renderStars(review.rating)}</div>
                </div>
                <Card.Text className="mb-0" style={{ color: "#555" }}>
                  {review.comment}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      {/* Related Items */}
      <Row className="mt-5">
        <Col>
          <h4 className="fw-bold mb-4" style={{ color: "#2D5A88" }}>Related Items</h4>
          <Row className="g-4">
            {relatedItems.map((item, idx) => (
              <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                <Card className="h-100 shadow-sm border-0">
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={item.img}
                      alt={item.title}
                      style={{ height: 180, objectFit: "cover", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                    />
                    {item.rented && (
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
                    )}
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold" style={{ color: "#2D5A88" }}>{item.title}</Card.Title>
                    <Card.Text className="mb-1">
                      <span className="fw-semibold">₹{item.price} / day</span>
                    </Card.Text>
                    <Card.Text className="mb-0 text-muted small">{item.category}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <SupportChat />
    </Container>
  );
};

export default ClotheDetail;