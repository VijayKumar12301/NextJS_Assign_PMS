'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './RegisterPage.css';
import registerUser from '@/services/authServices';

// Updated Validation Schema with Yup for username, email, address, phone, and password
const validationSchema = Yup.object({
   
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string(),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const RegisterPage = () => {
    // Set up Formik with updated initialValues for the new fields
    const formik = useFormik({
        initialValues: {
            
            username: '',
            email: '',
            address: '',
            phone: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Perform registration logic here
            const user1 = formik.values;
            console.log('User:', user1);
            
            registerUser(user1);
            console.log('Form Values:', values);
            alert(`Username: ${values.username}, Email: ${values.email}, Address: ${values.address}, Phone: ${values.phone}, Password: ${values.password}`);
            // Redirect to login page (optional, using Next.js router)
            // Example: router.push('/login');

           
        },
    });

    return (
        <div>
            {/* Header */}
            <header style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
                <h1>Register Form</h1>
            </header>

            {/* Main Form in the center */}
            <Container style={{ minHeight: '70vh' }} className="d-flex justify-content-center align-items-center">
                <Row className="w-100">
                    <Col sm={12} md={6} lg={4} className="mx-auto">
                        <Form onSubmit={formik.handleSubmit}>
                        
                            {/* Username Field */}
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={formik.touched.username && formik.errors.username}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.username}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Email Field */}
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={formik.touched.email && formik.errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Address Field */}
                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={formik.touched.address && formik.errors.address}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.address}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Phone Field */}
                            <Form.Group controlId="formPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={formik.touched.phone && formik.errors.phone}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Password Field */}
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={formik.touched.password && formik.errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Submit Button */}
                            <Button variant="danger" type="submit" className="w-100 mt-3">
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <footer style={{ backgroundColor: '#f8f9fa', padding: '10px', textAlign: 'center' }}>
                <p>&copy; 2025 Your Company</p>
            </footer>
        </div>
    );
};

export default RegisterPage;
