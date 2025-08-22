// src/components/booking/Step2DateTime.jsx
import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useApp } from '../../contexts/AppContext';

const Step2DateTime = ({ onNext, onBack }) => {
  const { state, dispatch } = useApp();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!selectedDate || !selectedTime) {
      setError('Please select both date and time');
      return;
    }

    const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
    if (selectedDateTime < new Date()) {
      setError('Please select a future date and time');
      return;
    }

    dispatch({ 
      type: 'SET_BOOKING_DATA', 
      payload: { dateTime: selectedDateTime.toISOString() } 
    });
    setError('');
    onNext();
  };

  // Generate time slots
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeSlots.push(time);
    }
  }

  return (
    <div>
      <h5>Select Date & Time</h5>
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              >
                <option value="">Select a time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      
      <div className="d-flex justify-content-between mt-4">
        <Button variant="outline-secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Next: Your Details
        </Button>
      </div>
    </div>
  );
};

export default Step2DateTime;