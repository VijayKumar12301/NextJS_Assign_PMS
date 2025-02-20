'use client'
import React from 'react';
import { Navbar, Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link'; // For Next.js navigation
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample product data
const prodData = [
    {
        title: 'Apple iPhone 14 Pro',
        subtitle: 'Smartphone',
        description: 'The latest features and updates from the Apple iPhone 14 Pro.'
    },
    {
        title: 'Samsung Galaxy S23',
        subtitle: 'Smartphone',
        description: 'Highlights and specifications of the Samsung Galaxy S23.'
    },
    {
        title: 'Sony WH-1000XM5 Headphones',
        subtitle: 'Headphones',
        description: 'News and reviews of the Sony WH-1000XM5 headphones.'
    },
    {
        title: 'Nike Air Max 270',
        subtitle: 'Shoes',
        description: 'Updates and releases from the Nike Air Max 270 collection.'
    },
    {
        title: 'Dell XPS 13 Laptop',
        subtitle: 'Laptop',
        description: 'Features and specifications of the Dell XPS 13 laptop.'
    },
    {
        title: 'Apple MacBook Pro 16-inch',
        subtitle: 'Laptop',
        description: 'News and updates from the Apple MacBook Pro 16-inch.'
    },
];

const HomePage = () => {
  return (
    <div>
      {/* Navbar component */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Sports News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Add Navbar Links here if necessary */}
        </Navbar.Collapse>
      </Navbar>

      {/* Main content */}
      <Container fluid>
        <Row className="mt-4">
          {prodData.map((prod, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{prod.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{prod.subtitle}</Card.Subtitle>
                  <Card.Text>{prod.description}</Card.Text>
                  {/* Navigation Link */}
                  <Link href={`/product/${index}`} passHref>
                    <Button variant="primary">View More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
