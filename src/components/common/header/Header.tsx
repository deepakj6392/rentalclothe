import { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from "react-bootstrap";
import CitySelectorModal from "../CitySelectorModal";

const Header = () => {
  const [city, setCity] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedCity = localStorage.getItem("selectedCity");
    if (savedCity) {
      setCity(savedCity);
    } else {
      setShowModal(true);
    }
  }, []);

  const handleCitySelect = (selected: string) => {
    setCity(selected);
    localStorage.setItem("selectedCity", selected);
    setShowModal(false);
  };

  return (
    <>
      <CitySelectorModal show={showModal} onSelect={handleCitySelect} />
      <Navbar expand="lg" className="header shadow-sm py-3">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-3 text-uppercase header">
            <span style={{ letterSpacing: "2px" }}>
              Rental
              <span style={{ color: "#F7C873" }}>Clothes</span>
            </span>
          </Navbar.Brand>
          {city && (
            <span
              className="ms-3 badge bg-warning text-dark px-3 py-2"
              style={{ fontSize: 16, cursor: "pointer" }}
              onClick={() => setShowModal(true)}
              title="Click to change city"
            >
              <i className="bi bi-geo-alt-fill me-1"></i> {city}
            </span>
          )}
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto align-items-lg-center">
              <Nav.Link href="/" className="mx-2">Home</Nav.Link>
              <Nav.Link href="/features" className="mx-2">Features</Nav.Link>
              <Nav.Link href="/about" className="mx-2">About</Nav.Link>
              <Nav.Link href="/contact" className="mx-2">Contact</Nav.Link>
              <NavDropdown title="Categories" id="categories-dropdown" className="mx-2">
                <NavDropdown.Item href="/categories?name=men">Men</NavDropdown.Item>
                <NavDropdown.Item href="/categories?name=women">Women</NavDropdown.Item>
                <NavDropdown.Item href="/categories?name=kids">Kids</NavDropdown.Item>
                <NavDropdown.Divider />
                <div className="dropdown-submenu">
                  <NavDropdown.Item className="dropdown-toggle" href="#">
                    Accessories
                  </NavDropdown.Item>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/categories?name=bags">Bags</a></li>
                    <li><a className="dropdown-item" href="/categories?name=jewelry">Jewelry</a></li>
                    <li><a className="dropdown-item" href="/categories?name=shoes">Shoes</a></li>
                  </ul>
                </div>
              </NavDropdown>
              <NavDropdown title="Add Category" id="add-category-dropdown" className="mx-2">
                <NavDropdown.Item href="/add-category?name=men">Add Men Category</NavDropdown.Item>
                <NavDropdown.Item href="/add-category?name=women">Add Women Category</NavDropdown.Item>
                <NavDropdown.Item href="/add-category?name=kids">Add Kids Category</NavDropdown.Item>
                <NavDropdown.Item href="/add-category?name=accessories">Add Accessories</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex me-3" style={{ maxWidth: 300 }}>
              <FormControl
                type="search"
                placeholder="Search for clothes, brands..."
                className="me-2 rounded-pill"
                aria-label="Search"
              />
              <Button variant="warning" className="rounded-pill px-3">Search</Button>
            </Form>
            <Nav>
              <NavDropdown title="Profile" id="profile-dropdown" align="end">
                <NavDropdown.Item href="/admin/dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
