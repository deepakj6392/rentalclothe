import React from "react";
import { Modal, Card, Row, Col } from "react-bootstrap";

const cities = [
  {
    name: "Mumbai",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Delhi",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Bangalore",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Hyderabad",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Chennai",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kolkata",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Pune",
    img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ahmedabad",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jaipur",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Lucknow",
    img: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Surat",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Vadodara",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Indore",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Bhopal",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Chandigarh",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
  },
];

const CitySelectorModal = ({ show, onSelect }: { show: boolean; onSelect: (city: string) => void }) => {
  return (
    <Modal show={show} backdrop="static" keyboard={false} centered size="lg">
      <Modal.Header>
        <Modal.Title>Select Your City</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-4 text-center" style={{ color: "#2D5A88" }}>
          Choose your city to see available rentals:
        </p>
        <Row className="g-3">
          {cities.map((city) => (
            <Col xs={6} md={3} key={city.name}>
              <Card
                className="h-100 shadow-sm city-card"
                style={{
                  cursor: "pointer",
                  borderRadius: 14,
                  transition: "transform 0.2s",
                }}
                onClick={() => onSelect(city.name)}
              >
                <Card.Img
                  variant="top"
                  src={city.img}
                  alt={city.name}
                  style={{
                    height: 100,
                    objectFit: "cover",
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                  }}
                />
                <Card.Body className="text-center py-2">
                  <Card.Title
                    style={{ fontSize: 17, color: "#2D5A88" }}
                  >
                    {city.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CitySelectorModal;