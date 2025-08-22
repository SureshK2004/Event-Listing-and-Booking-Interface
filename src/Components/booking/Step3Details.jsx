// src/components/booking/Step3Details.jsx
import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useApp } from '../../contexts/AppContext';
import { validateBookingDetails } from '../../utlis/validation';

const Step3Details = ({ onNext, onBack }) => {
  const { state, dispatch } = useApp();
  const [formData, setFormData] = useState(state.bookingData.details);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    const validationErrors = validateBookingDetails(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch({ 
      type: 'SET_BOOKING_DATA', 
      payload: { details: formData } 
    });
    onNext();
  };

  return (
    <div>
      <h5>Your Details</h5>
      
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Full Name *</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number *</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Attendees *</Form.Label>
          <Form.Control
            type="number"
            name="attendees"
            min="1"
            value={formData.attendees}
            onChange={handleChange}
            isInvalid={!!errors.attendees}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.attendees}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Special Requests</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      
      <div className="d-flex justify-content-between mt-4">
        <Button variant="outline-secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Next: Confirmation
        </Button>
      </div>
    </div>
  );
};

export default Step3Details;