import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Form, Alert, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

// Dummy authentication and product data for demonstration
const isLoggedIn = true; // Change to false to test not-logged-in state

const user = isLoggedIn
  ? {
      name: "Amit Sharma",
      email: "amit.sharma@email.com",
      address: "123 Fashion Street, Style City",
      phone: "+91 9876543210",
    }
  : null;

const clothe = {
  id: 1,
  title: "Classic Tuxedo",
  img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  price: 799,
  category: "Men's Wear",
  colors: ["Black", "Navy"],
  sizes: ["M", "L", "XL"],
  selectedColor: "Black",
  selectedSize: "L",
  rentalDays: 3,
};

const taxes = 0.18; // 18% GST
const deliveryCharge = 50;

const BillingPage = () => {
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || "",
    phone: user?.phone || "",
    city: "",
    state: "",
    pincode: "",
    altPhone: "",
    idProof: "",
    note: "",
    terms: false,
  });
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const subtotal = clothe.price * clothe.rentalDays;
  const taxAmount = subtotal * taxes;
  const total = subtotal + taxAmount + deliveryCharge;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePlaceOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidated(true);

    // Simple validation for all required fields
    if (
      form.name &&
      form.email &&
      form.phone &&
      form.address &&
      form.city &&
      form.state &&
      form.pincode &&
      form.idProof &&
      form.terms
    ) {
      setShowSuccess(true);
      // Here you can send data to backend for agent follow-up
    }
  };

  return (
    <Container fluid className="py-5 px-3 px-md-5" style={{ background: "#F8F9FA", minHeight: "100vh" }}>
      <Row className="justify-content-center">
        <Col md={8} lg={7}>
          <Card className="shadow-lg border-0 mb-4">
            <Card.Body>
              <h2 className="fw-bold mb-4" style={{ color: "#2D5A88" }}>Billing Details</h2>
              {/* Clothe Details */}
              <Row className="align-items-center mb-4">
                <Col xs={12} md={4}>
                  <Link to={`/clothes/${clothe.id}`}>
                    <img
                      src={clothe.img}
                      alt={clothe.title}
                      className="img-fluid rounded shadow-sm"
                      style={{ maxHeight: 160, objectFit: "cover" }}
                    />
                  </Link>
                </Col>
                <Col xs={12} md={8}>
                  <h5 className="fw-bold mb-1">
                    <Link to={`/clothes/${clothe.id}`} style={{ color: "#2D5A88", textDecoration: "none" }}>
                      {clothe.title}
                    </Link>
                  </h5>
                  <div className="mb-1 text-muted">{clothe.category}</div>
                  <div className="mb-1">
                    <Badge bg="light" text="dark" className="me-2 border">
                      Color: {clothe.selectedColor}
                    </Badge>
                    <Badge bg="secondary" className="me-2">
                      Size: {clothe.selectedSize}
                    </Badge>
                  </div>
                  <div className="mb-1">
                    <span className="fw-semibold">Rental Days:</span> {clothe.rentalDays}
                  </div>
                  <div className="mb-1">
                    <span className="fw-semibold">Price per day:</span> ₹{clothe.price}
                  </div>
                </Col>
              </Row>

              {/* User Details or Login Form */}
              {!isLoggedIn ? (
                <Alert variant="warning" className="mb-4">
                  Please log in to continue with your order.
                  <div className="mt-2">
                    <Button variant="primary" href="/login">
                      Login
                    </Button>
                  </div>
                </Alert>
              ) : (
                <Form noValidate validated={validated} onSubmit={handlePlaceOrder}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">Name is required.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">Email is required.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">Phone is required.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Alternate Phone</Form.Label>
                        <Form.Control
                          type="text"
                          name="altPhone"
                          value={form.altPhone}
                          onChange={handleChange}
                          placeholder="Optional"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          rows={8}
                          required
                        />
                        <Form.Control.Feedback type="invalid">Address is required.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">City is required.</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          name="state"
                          value={form.state}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">State is required.</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                          type="text"
                          name="pincode"
                          value={form.pincode}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">Pincode is required.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>ID Proof (Aadhaar, PAN, etc.)</Form.Label>
                        <Form.Control
                          type="text"
                          name="idProof"
                          value={form.idProof}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">ID Proof is required.</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Additional Note</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="note"
                          value={form.note}
                          onChange={handleChange}
                          rows={2}
                          placeholder="Any special instructions?"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* Terms and Conditions */}
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      name="terms"
                      checked={form.terms}
                      onChange={handleChange}
                      required
                      label={
                        <>
                          I agree to the{" "}
                          <Link to="/terms-and-condition" >
                            Terms and Conditions
                          </Link>
                        </>
                      }
                      feedback="You must agree before placing the order."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  {/* Billing Summary */}
                  <Card className="mb-3 border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="fw-bold mb-3" style={{ color: "#2D5A88" }}>Order Summary</h5>
                      <Row>
                        <Col xs={7}>Subtotal ({clothe.rentalDays} days)</Col>
                        <Col xs={5} className="text-end">₹{subtotal}</Col>
                      </Row>
                      <Row>
                        <Col xs={7}>GST (18%)</Col>
                        <Col xs={5} className="text-end">₹{taxAmount.toFixed(2)}</Col>
                      </Row>
                      <Row>
                        <Col xs={7}>Delivery Charges</Col>
                        <Col xs={5} className="text-end">₹{deliveryCharge}</Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col xs={7}><strong>Total</strong></Col>
                        <Col xs={5} className="text-end">
                          <strong>₹{total.toFixed(2)}</strong>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>

                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="w-100 fw-bold"
                    style={{ background: "#2D5A88", border: "none", borderRadius: 8 }}
                  >
                    Place Order
                  </Button>
                </Form>
              )}

              {/* Success Message */}
              {showSuccess && (
                <Alert variant="success" className="mt-4 text-center">
                  Your order details have been submitted!<br />
                  Our agent will contact you soon to confirm and complete your rental.
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BillingPage;