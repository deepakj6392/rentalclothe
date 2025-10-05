import { Container, Row, Col, Card } from "react-bootstrap";
// Bootstrap Icons are loaded via CSS, so use <i className="bi bi-..."></i>

const features = [
  {
    icon: "bi-bag-check-fill",
    title: "Vast Collection",
    desc: "Choose from a wide range of premium outfits and accessories for men, women, and kids. From ethnic wear to western, party wear to business attire, we have something for every occasion.",
    bg: "#F7C873"
  },
  {
    icon: "bi-laptop",
    title: "Easy Online Booking",
    desc: "Effortlessly browse, select, and book your favorite outfits online. Our user-friendly interface ensures a smooth and hassle-free rental experience from start to finish.",
    bg: "#E3F2FD"
  },
  {
    icon: "bi-calendar2-week",
    title: "Flexible Rental Plans",
    desc: "Enjoy flexible rental durations and affordable plans tailored to your needs. Rent for a day, a week, or longer—pay only for what you use.",
    bg: "#FFF3E0"
  },
  {
    icon: "bi-truck",
    title: "Doorstep Delivery & Pickup",
    desc: "Get your selected outfits delivered to your doorstep and picked up after use. We ensure timely and safe delivery for a seamless experience.",
    bg: "#E8F5E9"
  },
  {
    icon: "bi-droplet",
    title: "Professional Cleaning",
    desc: "All garments are professionally cleaned and sanitized after every use, ensuring hygiene and freshness for every customer.",
    bg: "#F3E5F5"
  },
  {
    icon: "bi-person-check",
    title: "Try Before You Rent",
    desc: "Book a trial session at our studio or request a home trial (in select cities) to ensure the perfect fit and style before renting.",
    bg: "#FFFDE7"
  },
  {
    icon: "bi-recycle",
    title: "Sustainable Fashion",
    desc: "Join us in promoting eco-friendly fashion. Renting reduces textile waste and supports a circular economy, making style sustainable.",
    bg: "#E0F7FA"
  },
  {
    icon: "bi-headset",
    title: "24/7 Customer Support",
    desc: "Our dedicated support team is available round the clock to assist you with queries, bookings, and after-rental support.",
    bg: "#FCE4EC"
  },
  {
    icon: "bi-shield-lock",
    title: "Secure Payments",
    desc: "Enjoy safe and secure online payments with multiple payment options, including credit/debit cards, UPI, and wallets.",
    bg: "#F1F8E9"
  }
];

const Features = () => {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#2D5A88", letterSpacing: "1px" }}>Platform Features</h2>
        <p className="lead" style={{ color: "#2D5A88" }}>
          Discover why thousands trust RentalClothes for their fashion needs.
        </p>
      </div>
      <Row className="g-4">
        {features.map((f) => (
          <Col md={4} key={f.title}>
            <Card
              className="h-100 shadow border-0 feature-card"
              style={{
                background: f.bg,
                borderRadius: 18,
                transition: "transform 0.2s, box-shadow 0.2s"
              }}
            >
              <Card.Body className="text-center d-flex flex-column align-items-center justify-content-center">
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    background: "#2D5A88",
                    boxShadow: "0 4px 16px rgba(45,90,136,0.10)"
                  }}
                >
                  <i className={`bi ${f.icon}`} style={{ fontSize: 36, color: "#F7C873" }}></i>
                </div>
                <h5 className="fw-semibold mb-2" style={{ color: "#2D5A88" }}>{f.title}</h5>
                <p style={{ color: "#333", fontSize: 15 }}>{f.desc}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <Col md={8} className="mx-auto">
          <Card className="shadow border-0" style={{ borderRadius: 18 }}>
            <Card.Body>
              <h4 className="fw-bold mb-3" style={{ color: "#2D5A88" }}>How It Works</h4>
              <ol style={{ color: "#2D5A88", fontWeight: 500, fontSize: 17 }}>
                <li className="mb-2"><span style={{ color: "#F7C873" }}>Browse:</span> Explore our collection and select your desired outfit or accessory.</li>
                <li className="mb-2"><span style={{ color: "#F7C873" }}>Book:</span> Choose your rental dates and complete the booking online.</li>
                <li className="mb-2"><span style={{ color: "#F7C873" }}>Receive:</span> Get your order delivered to your doorstep, ready to wear.</li>
                <li><span style={{ color: "#F7C873" }}>Return:</span> We pick up the outfit after your rental period—no hassle, no stress!</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;