import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Pagination, Modal, Alert } from 'react-bootstrap';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import clotheService from '../../services/clothe.service';

interface Product {
  _id: string;
  name: string;
  price: number;
  category?: { title: string };
  brand?: { name: string };
  createdAt: string;
}

const ClotheListings: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    brand: '',
    description: '',
    size: '',
    color: '',
    material: '',
    condition: '',
    images: [] as File[],
  });
  const [crop, setCrop] = useState<Crop>({ unit: '%', x: 25, y: 25, width: 50, height: 50 });
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [showCropModal, setShowCropModal] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<File | null>(null);
  const [imageToCropIndex, setImageToCropIndex] = useState<number | null>(null);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const limit = 12; // For grid layout

  const onImageLoaded = (image: HTMLImageElement) => {
    setImageRef(image);
  };

  const applyCrop = () => {
    if (imageRef && crop.width && crop.height) {
      const canvas = document.createElement('canvas');
      const scaleX = imageRef.naturalWidth / imageRef.width;
      const scaleY = imageRef.naturalHeight / imageRef.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.drawImage(
          imageRef,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );

        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'cropped_image.jpeg', { type: 'image/jpeg' });
            if (imageToCropIndex !== null) {
              const updatedImages = [...newProduct.images];
              updatedImages[imageToCropIndex] = file;
              setNewProduct({ ...newProduct, images: updatedImages });
            }
            setShowCropModal(false);
            setImageToCrop(null);
            setImageToCropIndex(null);
          }
        }, 'image/jpeg');
      }
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      const newImages = Array.from(target.files);
      setNewProduct({ ...newProduct, images: [...newProduct.images, ...newImages] });
    }
  };

  const handleImageDelete = (index: number) => {
    const updatedImages = newProduct.images.filter((_, i) => i !== index);
    setNewProduct({ ...newProduct, images: updatedImages });
  };

  const handleImageEdit = (index: number) => {
    setImageToCrop(newProduct.images[index]);
    setImageToCropIndex(index);
    setShowCropModal(true);
    setCrop({ unit: '%', x: 25, y: 25, width: 50, height: 50 });
  };

  useEffect(() => {
    fetchProducts();
  }, [page, search]);

  const fetchProducts = async () => {
    try {
      const response = await clotheService.getAllProducts({
        skip: (page - 1) * limit,
        limit,
        search,
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await clotheService.deleteProduct(id);
        fetchProducts();
        setAlert({ type: 'success', message: 'Product deleted successfully!' });
        setTimeout(() => setAlert(null), 3000);
      } catch (error) {
        console.error('Error deleting product:', error);
        setAlert({ type: 'error', message: 'Failed to delete product.' });
        setTimeout(() => setAlert(null), 3000);
      }
    }
  };

  const handleAddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append('name', newProduct.name);
      formData.append('price', newProduct.price);
      formData.append('category', newProduct.category);
      formData.append('brand', newProduct.brand);
      formData.append('description', newProduct.description);
      formData.append('size', newProduct.size);
      formData.append('color', newProduct.color);
      formData.append('material', newProduct.material);
      formData.append('condition', newProduct.condition);
      newProduct.images.forEach((image) => {
        formData.append('images', image);
      });

      await clotheService.addProduct(formData);
      setShowAddModal(false);
      setNewProduct({ name: '', price: '', category: '', brand: '', description: '', size: '', color: '', material: '', condition: '', images: [] });
      fetchProducts();
      setAlert({ type: 'success', message: 'Product added successfully!' });
      setTimeout(() => setAlert(null), 3000);
    } catch (error) {
      console.error('Error adding product:', error);
      setAlert({ type: 'error', message: 'Failed to add product.' });
      setTimeout(() => setAlert(null), 3000);
    }
  };



  return (
    <Container fluid className="mt-4">
      <Row className="mb-4">
        <Col>
          <h1>Clothes Listings Management</h1>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => setShowAddModal(true)}>
            Add New Product
          </Button>
        </Col>
      </Row>

      {alert && (
        <Alert variant={alert.type === 'success' ? 'success' : 'danger'}>
          {alert.message}
        </Alert>
      )}

      <Row className="mb-3">
        <Col md={6}>
          <InputGroup>
            <Form.Control
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        {products.map((product) => (
          <Col md={4} lg={3} key={product._id} className="mb-4">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate">{product.name}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ₹{product.price}<br />
                  <strong>Category:</strong> {product.category?.title || 'N/A'}<br />
                  <strong>Brand:</strong> {product.brand?.name || 'N/A'}<br />
                  <small className="text-muted">
                    Added: {new Date(product.createdAt).toLocaleDateString()}
                  </small>
                </Card.Text>
                <div className="mt-auto">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteProduct(product._id)}
                    className="w-100"
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        <Col className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev onClick={() => setPage(Math.max(1, page - 1))} />
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Next onClick={() => setPage(page + 1)} />
          </Pagination>
        </Col>
      </Row>

      {/* Add Product Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProduct.brand}
                    onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Size</Form.Label>
                  <Form.Control
                    as="select"
                    value={newProduct.size}
                    onChange={(e) => setNewProduct({ ...newProduct, size: e.target.value })}
                  >
                    <option value="">Select size</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Color</Form.Label>
                  <Form.Control
                    type="color"
                    value={newProduct.color}
                    onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })}
                    style={{ height: '38px', cursor: 'pointer' }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Material</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProduct.material}
                    onChange={(e) => setNewProduct({ ...newProduct, material: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Condition</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProduct.condition}
                    onChange={(e) => setNewProduct({ ...newProduct, condition: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Images</Form.Label>
              <div
                className="border border-2 border-dashed border-secondary rounded p-4 text-center"
                style={{ cursor: 'pointer', minHeight: '120px' }}
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div>
                    <i className="bi bi-cloud-upload fs-1 text-secondary"></i>
                    <p className="mb-0 mt-2 text-secondary">Click to upload images</p>
                    <small className="text-muted">Multiple images allowed</small>
                  </div>
                </div>
              </div>
              <Form.Control
                id="image-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageSelect}
                style={{ display: 'none' }}
              />
              {newProduct.images.length > 0 && (
                <div className="mt-3">
                  <Row>
                    {newProduct.images.map((image, index) => (
                      <Col key={index} md={3} className="mb-3">
                        <Card className="position-relative">
                          <Card.Img
                            variant="top"
                            src={URL.createObjectURL(image)}
                            style={{ height: '120px', objectFit: 'cover' }}
                          />
                          <Card.Body className="p-2">
                            <div className="d-flex justify-content-between">
                              <Button
                                variant="outline-primary"
                                size="sm"
                                onClick={() => handleImageEdit(index)}
                              >
                                <i className="bi bi-pencil"></i>
                              </Button>
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => handleImageDelete(index)}
                              >
                                <i className="bi bi-trash"></i>
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Crop Modal */}
      <Modal
        show={showCropModal}
        onHide={() => setShowCropModal(false)}
        size="lg"
        backdrop={true}
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Crop Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {imageToCrop && (
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ cursor: 'default' }}
            >
              <ReactCrop
                crop={crop}
                onChange={(newCrop) => {
                  // Enforce minimum width and height of 150px
                  if (newCrop.width < 150) newCrop.width = 150;
                  if (newCrop.height < 150) newCrop.height = 150;
                  setCrop(newCrop);
                }}
                minWidth={150}
                minHeight={150}
              >
                <img
                  src={URL.createObjectURL(imageToCrop)}
                  onLoad={(e) => onImageLoaded(e.currentTarget)}
                  style={{ maxWidth: '100%', maxHeight: '400px' }}
                />
              </ReactCrop>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCropModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={applyCrop}>
            Apply Crop
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ClotheListings;
