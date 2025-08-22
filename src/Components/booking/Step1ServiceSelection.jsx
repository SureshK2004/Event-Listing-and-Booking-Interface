import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useApp } from '../../contexts/AppContext';

const Step1ServiceSelection = ({ onNext }) => {
  const { state, dispatch } = useApp();
  const { services, bookingData } = state;

  const handleServiceSelect = (service) => {
    dispatch({ type: 'SET_BOOKING_DATA', payload: { service } });
  };

  return (
    <div>
      <h5>Select a Service</h5>
      <Form>
        {services.map(service => (
          <Form.Check 
            key={service.id}
            type="radio"
            name="service"
            id={`service-${service.id}`}
            label={
              <div>
                <strong>{service.name}</strong> - ${service.price}
                <br />
                <small>{service.description}</small>
              </div>
            }
            checked={bookingData.service?.id === service.id}
            onChange={() => handleServiceSelect(service)}
            className="mb-3"
          />
        ))}
      </Form>
      <div className="d-flex justify-content-end mt-4">
        <Button 
          onClick={onNext} 
          disabled={!bookingData.service}
          variant="primary"
        >
          Next: Select Date & Time
        </Button>
      </div>
    </div>
  );
};

export default Step1ServiceSelection;