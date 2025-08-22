// src/components/common/ErrorMessage.jsx
import React from 'react';
import { Alert, Container, Button } from 'react-bootstrap';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <Container className="py-5">
      <Alert variant="danger">
        <Alert.Heading>Something went wrong</Alert.Heading>
        <p>{message}</p>
        {onRetry && (
          <div className="d-flex justify-content-end">
            <Button onClick={onRetry} variant="outline-danger">
              Try Again
            </Button>
          </div>
        )}
      </Alert>
    </Container>
  );
};

export default ErrorMessage;