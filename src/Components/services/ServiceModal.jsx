import React from 'react';
import { Modal, Button, Row, Col, Badge } from 'react-bootstrap';
import { useApp } from '../../contexts/AppContext';

const ServiceModal = ({ show, onHide, onBook }) => {
  const { state } = useApp();
  const service = state.selectedService;

  if (!service) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{service.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6}>
            <img 
              src={service.image} 
              alt={service.name}
              className="img-fluid rounded"
              style={{ height: '250px', width: '100%', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h4 className="mb-0">${service.price}</h4>
              <Badge bg="secondary" className="fs-6">{service.category}</Badge>
            </div>
            <p className="text-muted">by {service.provider}</p>
            <p>{service.description}</p>
            
            <div className="mb-3">
              <strong>Rating:</strong> 
              <span className="ms-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i 
                    key={i} 
                    className={`bi ${i < Math.floor(service.rating) ? 'bi-star-fill' : 'bi-star'} text-warning`}
                  ></i>
                ))}
                <span className="ms-2">({service.rating})</span>
              </span>
            </div>
            
            <div className="mb-3">
              <strong>Available Dates:</strong>
              <div className="mt-2">
                {service.availableDates.map(date => (
                  <Badge key={date} bg="light" text="dark" className="me-2 mb-2">
                    {new Date(date).toLocaleDateString()}
                  </Badge>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onBook}>
          Book This Service
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ServiceModal;