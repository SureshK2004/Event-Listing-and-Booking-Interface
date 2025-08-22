// src/components/booking/Step4Confirmation.jsx
import React from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import { useApp } from '../../contexts/AppContext';

const Step4Confirmation = ({ onComplete, onBack }) => {
  const { state, dispatch } = useApp();
  const { service, dateTime, details } = state.bookingData;
  const [bookingStatus, setBookingStatus] = useState('idle');

  const handleCompleteBooking = async () => {
    setBookingStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send the booking data to your backend
      console.log('Booking completed:', state.bookingData);
      
      setBookingStatus('success');
      setTimeout(() => {
        dispatch({ type: 'RESET_BOOKING' });
        onComplete();
      }, 2000);
    } catch (error) {
      setBookingStatus('error');
    }
  };

  if (bookingStatus === 'success') {
    return (
      <div className="text-center py-4">
        <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '3rem' }}></i>
        <h4 className="mt-3">Booking Confirmed!</h4>
        <p>Your event service has been successfully booked.</p>
        <p>We've sent a confirmation email to {details.email}.</p>
      </div>
    );
  }

  return (
    <div>
      <h5>Confirm Your Booking</h5>
      <p>Please review your booking details before confirming.</p>
      
      {bookingStatus === 'error' && (
        <Alert variant="danger">
          There was an error processing your booking. Please try again.
        </Alert>
      )}
      
      <Card className="mb-4">
        <Card.Header>
          <h6 className="mb-0">Service Details</h6>
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <h6>{service.name}</h6>
              <p className="text-muted mb-0">{service.provider}</p>
            </div>
            <div className="text-end">
              <strong>${service.price}</strong>
            </div>
          </div>
        </Card.Body>
      </Card>
      
      <Card className="mb-4">
        <Card.Header>
          <h6 className="mb-0">Date & Time</h6>
        </Card.Header>
        <Card.Body>
          <p className="mb-0">
            {new Date(dateTime).toLocaleDateString()} at {new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </Card.Body>
      </Card>
      
      <Card className="mb-4">
        <Card.Header>
          <h6 className="mb-0">Your Information</h6>
        </Card.Header>
        <Card.Body>
          <p><strong>Name:</strong> {details.name}</p>
          <p><strong>Email:</strong> {details.email}</p>
          <p><strong>Phone:</strong> {details.phone}</p>
          <p><strong>Attendees:</strong> {details.attendees}</p>
          {details.specialRequests && (
            <p><strong>Special Requests:</strong> {details.specialRequests}</p>
          )}
        </Card.Body>
      </Card>
      
      <div className="d-flex justify-content-between">
        <Button variant="outline-secondary" onClick={onBack}>
          Back
        </Button>
        <Button 
          variant="success" 
          onClick={handleCompleteBooking}
          disabled={bookingStatus === 'loading'}
        >
          {bookingStatus === 'loading' ? 'Processing...' : 'Confirm Booking'}
        </Button>
      </div>
    </div>
  );
};

export default Step4Confirmation;