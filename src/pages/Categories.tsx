import { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "animate.css";

// Category data
const categories = [
  {
    name: "Men's Wear",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    description: "Elegant suits, shirts, and more for men. Perfect for weddings, parties, and formal events.",
    items: 25,
  },
  {
    name: "Women's Wear",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    description: "Beautiful sarees, dresses, and outfits for women. From traditional to modern styles.",
    items: 30,
  },
  {
    name: "Kids' Wear",
    img: "https://images.unsplash.com/photo-1503944168849-1ac0c0d79fb2?auto=format&fit=crop&w=400&q=80",
    description: "Colorful and comfortable clothes for kids. Fun designs for every occasion.",
    items: 20,
  },
  {
    name: "Accessories",
    img: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=400&q=80",
    description: "Jewelry, bags, and accessories to complement your outfit.",
    items: 15,
  },
  {
    name: "Formal Wear",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80",
    description: "Professional attire for business meetings and corporate events.",
    items: 18,
  },
  {
    name: "Casual Wear",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80",
    description: "Comfortable everyday wear for leisure and outings.",
    items: 22,
  },
];

// Featured rentals
const featuredRentals = [
  {
    id: 1,
    title: "Designer Lehenga",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: 1299,
    category: "Women's Wear",
  },
  {
    id: 2,
    title: "Classic Tuxedo",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    price: 799,
    category: "Men's Wear",
  },
  {
    id: 3,
    title: "Kids Party Dress",
    img: "https://images.unsplash.com/photo-1503944168849-1ac0c0d79fb2?auto=format&fit=crop&w=400&q=80",
    price: 399,
    category: "Kids' Wear",
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: "bi bi-shield-check",
    title: "Quality Assured",
    description: "All items are thoroughly cleaned and inspected before rental.",
  },
  {
    icon: "bi bi-truck",
    title: "Fast Delivery",
    description: "Quick and reliable delivery to your doorstep.",
  },
  {
    icon: "bi bi-cash-stack",
    title: "Affordable Prices",
    description: "Rent high-quality clothes at budget-friendly rates.",
  },
  {
    icon: "bi bi-headset",
    title: "24/7 Support",
    description: "Our team is here to help you anytime.",
  },
];

const Categories = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ background: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="hero-section py-5 position-relative" style={{ background: "linear-gradient(135deg, #2D5A88 0%, #1E3A5F 100%)", color: "white", clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}>
        <Container className="text-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">Discover Your Perfect Outfit</h1>
          <p className="lead animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
            Rent from a wide range of categories for every occasion. Quality, style, and affordability in one place.
          </p>
          <Button variant="light" size="lg" className="mt-3 animate__animated animate__bounceIn" style={{ animationDelay: "0.4s" }}>
            <Link to="/clothes" style={{ textDecoration: "none", color: "inherit" }}>Browse All Clothes</Link>
          </Button>
        </Container>
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          background: "rgba(255, 255, 255, 0.15)",
          clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)",
          zIndex: 1,
          pointerEvents: "none"
        }}></div>
      </section>

      {/* Categories Section */}
      <Container  className="py-5">
        <h2 className="fw-bold mb-4 text-center" style={{ color: "#2D5A88" }}>Shop by Category</h2>
        <Row className="g-4 justify-content-center">
          {categories.map((category, idx) => (
            <Col xs={12} sm={6} md={4} lg={3} key={category.name}>
              <div
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Card
                  className="h-100 shadow-sm border-0"
                  onMouseEnter={() => setHovered(category.name)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    boxShadow: hovered === category.name ? '0 8px 16px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    transform: hovered === category.name ? 'translateY(-5px)' : 'translateY(0)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={category.img}
                      alt={category.name}
                      style={{ height: 200, objectFit: "cover", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                    />
                    <Badge
                      bg="primary"
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        fontSize: 12,
                      }}
                    >
                      {category.items} items
                    </Badge>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold" style={{ color: "#2D5A88" }}>{category.name}</Card.Title>
                    <Card.Text className="text-muted small">{category.description}</Card.Text>
                    <Link to={`/clothes?category=${encodeURIComponent(category.name)}`}>
                      <Button variant="primary" className="w-100">Explore</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Featured Rentals Section */}
      <section className="py-5" style={{ background: "#FFFFFF" }}>
        <Container>
          <h3 className="fw-bold mb-4 text-center" style={{ color: "#2D5A88" }}>Featured Rentals</h3>
          <Row className="g-4 justify-content-center">
            {featuredRentals.map((item, idx) => (
              <Col xs={12} sm={6} md={4} key={item.id}>
                <div className="animate__animated animate__zoomIn" style={{ animationDelay: `${idx * 0.2}s` }}>
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Img
                      variant="top"
                      src={item.img}
                      alt={item.title}
                      style={{ height: 180, objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold" style={{ color: "#2D5A88" }}>{item.title}</Card.Title>
                      <Card.Text className="mb-1">
                        <span className="fw-semibold">₹{item.price} / day</span>
                      </Card.Text>
                      <Card.Text className="text-muted small">{item.category}</Card.Text>
                      <Link to={`/clothes/${item.id}`}>
                        <Button variant="outline-primary" size="sm">View Details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5" style={{ background: "#F8F9FA" }}>
        <Container>
          <h3 className="fw-bold mb-4 text-center" style={{ color: "#2D5A88" }}>Why Choose Us?</h3>
          <Row className="g-4">
            {whyChooseUs.map((item, idx) => (
              <Col xs={12} sm={6} md={3} key={idx}>
                <div className="text-center animate__animated animate__fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="mb-3">
                    <i className={`${item.icon} animate__animated animate__bounceIn`} style={{ fontSize: "3rem", color: "#2D5A88", animationDelay: `${idx * 0.2}s` }}></i>
                  </div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted">{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4" style={{ background: "#2D5A88", color: "white" }}>
        <Container className="text-center">
          <p>&copy; 2023 Rental Clothes. All rights reserved.</p>
          <p>Contact us: support@rentalclothes.com | +91 12345 67890</p>
        </Container>
      </footer>
    </div>
  );
};

export default Categories;
