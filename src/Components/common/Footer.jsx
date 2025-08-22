import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="fw-bold mb-3">EventSpace</h5>
            <p>Your premier platform for discovering and booking exceptional event services. We connect you with the best vendors for your special occasions.</p>
            <div className="social-icons mt-3">
              <a href="#" className="text-light me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
          
          <Col md={2}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Services</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          
          <Col md={3}>
            <h6 className="fw-bold mb-3">Service Categories</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Venues</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Catering</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Photography</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Entertainment</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Decoration</a></li>
            </ul>
          </Col>
          
          <Col md={3}>
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                123 Event Expo Technology Solution, Porur, Chennai.
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                +91 6379991294
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                info@eventspace.com
              </li>
              <li className="mb-2">
                <i className="bi bi-clock me-2"></i>
                Mon-Fri: 9AM-6PM
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col md={6}>
            <p className="mb-0">&copy; 2025 EventSpace. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#" className="text-light text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-light text-decoration-none">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;