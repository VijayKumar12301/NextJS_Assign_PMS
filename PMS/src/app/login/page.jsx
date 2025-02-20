'use client'

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './LoginPage.css';

// Validation Schema using Yup
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

function LoginPage() {
    // Set up Formik with initialValues and validation
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Perform login logic here
            console.log('Email:', values.email);
            console.log('Password:', values.password);
            alert(`Email: ${values.email}, Password: ${values.password}`);
        },
    });

    return (
        <Container style={{ minHeight: '70vh' }} className="d-flex justify-content-center align-items-center">
            <Row className="w-100">
                <Col sm={12} md={6} lg={4} className="mx-auto">
                    <Form onSubmit={formik.handleSubmit} style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                        <h1 className="text-center mb-4">Login</h1>

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
                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
