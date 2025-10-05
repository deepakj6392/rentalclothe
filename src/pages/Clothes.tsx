import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, InputGroup, Badge, Pagination, Fade } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import "animate.css";

// Sample data with colors and sizes
const allProducts = [
  {
    id: 1,
    title: "Classic Tuxedo",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    price: 799,
    category: "Men's Wear",
    city: "Mumbai",
    rented: true,
    colors: ["Black", "Navy"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 2,
    title: "Designer Saree",
    img: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80",
    price: 699,
    category: "Women's Wear",
    city: "Delhi",
    rented: true,
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 3,
    title: "Party Dress",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    price: 399,
    category: "Kids' Wear",
    city: "Bangalore",
    rented: false,
    colors: ["Pink", "Yellow"],
    sizes: ["XS", "S", "M"],
  },
  {
    id: 4,
    title: "Evening Gown",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    price: 899,
    category: "Women's Wear",
    city: "Hyderabad",
    rented: false,
    colors: ["Purple", "Black"],
    sizes: ["M", "L"],
  },
  {
    id: 5,
    title: "Wedding Sherwani",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    price: 999,
    category: "Men's Wear",
    city: "Chennai",
    rented: false,
    colors: ["Cream", "Gold"],
    sizes: ["L", "XL"],
  },
  {
    id: 6,
    title: "Lehenga Choli",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: 1099,
    category: "Women's Wear",
    city: "Kolkata",
    rented: false,
    colors: ["Pink", "Blue"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 7,
    title: "Ethnic Kurta Set",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    price: 349,
    category: "Kids' Wear",
    city: "Pune",
    rented: false,
    colors: ["Yellow", "White"],
    sizes: ["XS", "S"],
  },
  {
    id: 8,
    title: "Casual Blazer",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: 499,
    category: "Men's Wear",
    city: "Ahmedabad",
    rented: false,
    colors: ["Grey", "Blue"],
    sizes: ["M", "L"],
  },
  {
    id: 9,
    title: "Royal Lehenga",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    price: 1299,
    category: "Women's Wear",
    city: "Jaipur",
    rented: false,
    colors: ["Gold", "Red"],
    sizes: ["S", "M"],
  },
  {
    id: 10,
    title: "Lucknowi Kurti",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    price: 599,
    category: "Women's Wear",
    city: "Lucknow",
    rented: false,
    colors: ["White", "Blue"],
    sizes: ["M", "L"],
  },
  {
    id: 11,
    title: "Surat Silk Saree",
    img: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80",
    price: 799,
    category: "Women's Wear",
    city: "Surat",
    rented: false,
    colors: ["Green", "Yellow"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 12,
    title: "Vadodara Suit",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    price: 699,
    category: "Men's Wear",
    city: "Vadodara",
    rented: false,
    colors: ["Black", "Grey"],
    sizes: ["L", "XL"],
  },
  {
    id: 13,
    title: "Indore Party Wear",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    price: 499,
    category: "Kids' Wear",
    city: "Indore",
    rented: false,
    colors: ["Blue", "Red"],
    sizes: ["S", "M"],
  },
  {
    id: 14,
    title: "Bhopal Traditional Dress",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    price: 649,
    category: "Women's Wear",
    city: "Bhopal",
    rented: false,
    colors: ["Orange", "White"],
    sizes: ["M", "L"],
  },
  {
    id: 15,
    title: "Chandigarh Formal",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    price: 899,
    category: "Men's Wear",
    city: "Chandigarh",
    rented: false,
    colors: ["Navy", "Black"],
    sizes: ["M", "L"],
  },
];

const categories = ["Men's Wear", "Women's Wear", "Kids' Wear"];
const allColors = Array.from(new Set(allProducts.flatMap((p) => p.colors)));
const allSizes = Array.from(new Set(allProducts.flatMap((p) => p.sizes)));
const allCities = Array.from(new Set(allProducts.map((p) => p.city)));
const promotionalItems = allProducts.filter((p) => p.rented).slice(0, 3);

const PRODUCTS_PER_PAGE = 6;

const Clothes = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1200]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<string>("");
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    const city = localStorage.getItem('selectedCity');
    if (city) setSelectedCity(city);

    const category = searchParams.get('category');
    if (category) {
      setSelectedCategories([category]);
    }
  }, [searchParams]);

  // Filter logic
  const filteredProducts = allProducts.filter((product) => {
    const inCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const inColor =
      selectedColors.length === 0 || product.colors.some((c) => selectedColors.includes(c));
    const inSize =
      selectedSizes.length === 0 || product.sizes.some((s) => selectedSizes.includes(s));
    const inCity =
      selectedCities.length === 0 || selectedCities.includes(product.city);
    const inSelectedCity = !selectedCity || product.city === selectedCity;
    const inPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const inSearch =
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());
    return inCategory && inColor && inSize && inCity && inSelectedCity && inPrice && inSearch;
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "name-asc") return a.title.localeCompare(b.title);
    if (sort === "name-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  // Handle category filter
  const handleCategoryChange = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setPage(1);
  };

  // Handle color filter
  const handleColorChange = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
    setPage(1);
  };

  // Handle size filter
  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
    setPage(1);
  };

  // Handle city filter
  const handleCityChange = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
    setPage(1);
  };

  // Handle price range
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, idx: number) => {
    const val = Number(e.target.value);
    setPriceRange((prev) => (idx === 0 ? [val, prev[1]] : [prev[0], val]));
    setPage(1);
  };

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  // Handle clear filters
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCities([]);
    setPriceRange([0, 1200]);
    setSearch("");
    setSort("");
    setPage(1);
  };


  return (
    <Container className="py-4" style={{ background: "#F8F9FA", minHeight: "100vh" }}>
      {/* Promotional Rented Items */}
      <section className="mb-5">
        <h3 className="fw-bold mb-4" style={{ color: "#2D5A88" }}>Promotional Rented Items</h3>
        <Row className="g-4">
          {promotionalItems.map((item, idx) => (
            <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Fade in appear timeout={400 + idx * 200}>
                <div>
                  <Card className={`h-100 shadow-sm border-0`}>
                    <div style={{ position: "relative" }}>
                      <Card.Img
                        variant="top"
                        src={item.img}
                        alt={item.title}
                        style={{ height: 180, objectFit: "cover", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
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
                        <span className="fw-semibold">₹{item.price} / day</span>
                      </Card.Text>
                      <Card.Text className="mb-0 text-muted small">{item.category}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Fade>
            </Col>
          ))}
        </Row>
      </section>

      <Row>
        {/* Sidebar Filters */}
        <Col md={3} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold mb-3" style={{ color: "#2D5A88" }}>Filters</h5>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Category</Form.Label>
          {categories.map((cat) => (
            <Form.Check
              key={cat}
              type="checkbox"
              label={cat}
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
              className="mb-1"
            />
          ))}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Color</Form.Label>
          <div className="d-flex flex-wrap gap-2">
            {allColors.map((color) => (
              <Form.Check
                key={color}
                type="checkbox"
                label={color}
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
                className="mb-1"
              />
            ))}
          </div>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Size</Form.Label>
          <div className="d-flex flex-wrap gap-2">
            {allSizes.map((size) => (
              <Form.Check
                key={size}
                type="checkbox"
                label={size}
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
                className="mb-1"
              />
            ))}
          </div>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">City</Form.Label>
          <div className="d-flex flex-wrap gap-2">
            {allCities.map((city) => (
              <Form.Check
                key={city}
                type="checkbox"
                label={city}
                checked={selectedCities.includes(city)}
                onChange={() => handleCityChange(city)}
                className="mb-1"
              />
            ))}
          </div>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="fw-semibold">Price Range (₹)</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              min={0}
              max={priceRange[1]}
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
            />
            <InputGroup.Text>-</InputGroup.Text>
            <Form.Control
              type="number"
              min={priceRange[0]}
              max={1200}
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
            />
          </InputGroup>
          <div className="text-muted small mt-1">
            {`₹${priceRange[0]} - ₹${priceRange[1]}`}
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-semibold">Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by name or category"
            value={search}
            onChange={handleSearch}
          />
        </Form.Group>
        <Button
          variant="outline-secondary"
          className="mt-3 w-100"
          onClick={handleClearFilters}
        >
          Clear Filters
        </Button>
      </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Product Listing */}
        <Col md={9}>
          <h4 className="fw-bold mb-4" style={{ color: "#2D5A88" }}>All Products</h4>
          {selectedCity && <p className="text-muted mb-3">Products in {selectedCity}</p>}
          <Form.Select value={sort} onChange={(e) => setSort(e.target.value)} className="mb-3" style={{maxWidth: 200}}>
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </Form.Select>
          <Row className="g-4">
            {paginatedProducts.length === 0 && (
              <Col>
                <div className="text-center text-muted py-5 animate__animated animate__fadeIn">
                  No products found.
                </div>
              </Col>
            )}
            {paginatedProducts.map((product, idx) => (
              <Col xs={12} sm={6} md={4} lg={4} key={product.id}>
                <Fade in appear timeout={400 + idx * 100}>
                  <div>
                    <Card className={`h-100 shadow-sm border-0`} onMouseEnter={() => setHovered(product.id)} onMouseLeave={() => setHovered(null)} style={{ boxShadow: hovered === product.id ? '0 4px 8px rgba(0,0,0,0.2)' : 'none', transition: 'box-shadow 0.3s' }}>
                      <Link to={`/clothes/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <div style={{ position: "relative" }}>
                          <Card.Img
                            variant="top"
                            src={product.img}
                            alt={product.title}
                            style={{ height: 180, objectFit: "cover", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                          />
                          {product.rented && (
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
                          <Card.Title className="fw-bold" style={{ color: "#2D5A88" }}>{product.title}</Card.Title>
                          <Card.Text className="mb-1">
                            <span className="fw-semibold">₹{product.price} / day</span>
                          </Card.Text>
                          <Card.Text className="mb-1 text-muted small">{product.category}</Card.Text>
                          <Card.Text className="mb-1 text-muted small">{product.city}</Card.Text>
                          <Card.Text className="mb-1 text-muted small">
                            <span>Colors: </span>
                            {product.colors.map((color: string) => (
                              <Badge
                                key={color}
                                bg="light"
                                text="dark"
                                className="me-1 border"
                                style={{ fontSize: 11 }}
                              >
                                {color}
                              </Badge>
                            ))}
                          </Card.Text>
                          <Card.Text className="mb-0 text-muted small">
                            <span>Sizes: </span>
                            {product.sizes.map((size: string) => (
                              <Badge
                                key={size}
                                bg="secondary"
                                className="me-1"
                                style={{ fontSize: 11 }}
                              >
                                {size}
                              </Badge>
                            ))}
                          </Card.Text>
                        </Card.Body>
                      </Link>
                    </Card>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <Pagination>
                <Pagination.First onClick={() => setPage(1)} disabled={page === 1} />
                <Pagination.Prev onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} />
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <Pagination.Item
                    key={idx + 1}
                    active={page === idx + 1}
                    onClick={() => setPage(idx + 1)}
                  >
                    {idx + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} />
                <Pagination.Last onClick={() => setPage(totalPages)} disabled={page === totalPages} />
              </Pagination>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Clothes;