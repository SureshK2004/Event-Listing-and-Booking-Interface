// src/components/services/ServiceFilter.jsx
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useApp } from '../../contexts/AppContext';
import { useDebounce } from '../../hooks/useDebounce';

const ServiceFilter = () => {
  const { state, dispatch } = useApp();
  const [searchTerm, setSearchTerm] = useState(state.filters.searchQuery);
  const [category, setCategory] = useState(state.filters.category);
  const [priceRange, setPriceRange] = useState(state.filters.priceRange);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch({ 
      type: 'SET_FILTERS', 
      payload: { 
        searchQuery: debouncedSearchTerm,
        category,
        priceRange
      } 
    });
  }, [debouncedSearchTerm, category, priceRange, dispatch]);

  useEffect(() => {
    const filtered = state.services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      const matchesCategory = category === 'all' || service.category === category;
      const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
    
    dispatch({ type: 'SET_FILTERED_SERVICES', payload: filtered });
  }, [state.services, state.filters, dispatch, debouncedSearchTerm]);

  const categories = ['all', 'photography', 'catering', 'venue', 'entertainment', 'decoration'];

  const clearFilters = () => {
    setSearchTerm('');
    setCategory('all');
    setPriceRange([0, 1000]);
  };

  return (
    <div className="mb-4 p-3 bg-light rounded">
      <Row>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Search Services</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </Col>
        
        <Col md={3}>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        
        <Col md={3}>
          <Form.Group>
            <Form.Label>Price Range: ${priceRange[0]} - ${priceRange[1]}</Form.Label>
            <Form.Range
              min={0}
              max={1000}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            />
          </Form.Group>
        </Col>
        
        <Col md={2} className="d-flex align-items-end">
          <Button variant="outline-secondary" onClick={clearFilters}>
            Clear Filters
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceFilter;