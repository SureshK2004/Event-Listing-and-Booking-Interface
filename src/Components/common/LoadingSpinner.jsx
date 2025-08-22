// src/components/common/LoadingSpinner.jsx
import React from 'react';
import { Spinner, Container } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
    <Container className="text-center py-5">
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="mt-3">Loading services...</p>
    </Container>
  );
};

export default LoadingSpinner;