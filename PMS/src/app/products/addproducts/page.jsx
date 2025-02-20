import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AddProducts.css'; // Import the CSS for styling

function AddProducts() {
    const [productName, setProductName] = useState('');
    const [productId, setProductId] = useState('');
    const [manufacturedDate, setManufacturedDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [weight, setWeight] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Perform the necessary actions with the form data
        // For example, you can send the data to an API or update the state

        // Reset the form fields
        setProductName('');
        setProductId('');
        setManufacturedDate('');
        setExpiryDate('');
        setWeight('');
    };

    return (
        <div className="page-container">
            {/* Header at the top */}
            <header className="header bg-dark text-white text-center py-3">
                <h1>Add New Product</h1>
            </header>

            {/* Main Form Container */}
            <Container className="form-container mt-5">
                <Row className="justify-content-center">
                    <Col sm={12} md={8} lg={6}>
                        <Form onSubmit={handleFormSubmit} className="shadow p-4 rounded bg-light">
                            {/* Product Name Field */}
                            <Form.Group controlId="productName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter product name"
                                    value={productName}
                                    onChange={(event) => setProductName(event.target.value)}
                                    required
                                />
                            </Form.Group>

                            {/* Product ID Field */}
                            <Form.Group controlId="productId">
                                <Form.Label>Product ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter product ID"
                                    value={productId}
                                    onChange={(event) => setProductId(event.target.value)}
                                    required
                                />
                            </Form.Group>

                            {/* Manufactured Date Field */}
                            <Form.Group controlId="manufacturedDate">
                                <Form.Label>Manufactured Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={manufacturedDate}
                                    onChange={(event) => setManufacturedDate(event.target.value)}
                                    required
                                />
                            </Form.Group>

                            {/* Expiry Date Field */}
                            <Form.Group controlId="expiryDate">
                                <Form.Label>Expiry Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={expiryDate}
                                    onChange={(event) => setExpiryDate(event.target.value)}
                                    required
                                />
                            </Form.Group>

                            {/* Weight Field */}
                            <Form.Group controlId="weight">
                                <Form.Label>Weight of Product</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter product weight"
                                    value={weight}
                                    onChange={(event) => setWeight(event.target.value)}
                                    required
                                />
                            </Form.Group>

                            {/* Submit Button */}
                            <Button variant="primary" type="submit" className="w-100 mt-3">
                                Add Product
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            {/* Footer at the bottom */}
            <footer className="footer bg-dark text-white text-center py-3">
                <p>&copy; 2025 Product Management System</p>
            </footer>
        </div>
    );
}

export default AddProducts;
