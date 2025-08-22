import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useApp } from '../../contexts/AppContext';

const ServiceCard = ({ service }) => {
  const { dispatch } = useApp();

  const handleSelectService = () => {
    dispatch({ type: 'SET_SELECTED_SERVICE', payload: service });
  };

  return (
    <Card className="h-100 service-card">
      <Card.Img 
        variant="top" 
        src={service.image} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title>{service.name}</Card.Title>
          <Badge bg="secondary">{service.category}</Badge>
        </div>
        <Card.Text className="flex-grow-1">{service.description}</Card.Text>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="h5 mb-0">${service.price}</span>
            <small className="text-muted">
              <i className="bi bi-star-fill text-warning"></i> {service.rating}
            </small>
          </div>
          <Button 
            variant="primary" 
            onClick={handleSelectService}
            className="w-100"
          >
            View Details & Book
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;