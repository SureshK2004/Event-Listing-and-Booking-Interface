import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import ServiceFilter from './ServiceFilter';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import { useServices } from '../../hooks/useServices';

const ServiceList = () => {
  const { filteredServices, loading, error } = useServices();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Container>
      <h2 className="my-4">Available Services</h2>
      <ServiceFilter />
      {filteredServices.length === 0 ? (
        <div className="text-center py-5">
          <h4>No services match your criteria</h4>
          <p>Try adjusting your filters or search query</p>
        </div>
      ) : (
        <Row>
          {filteredServices.map(service => (
            <Col key={service.id} md={6} lg={4} className="mb-4">
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ServiceList;