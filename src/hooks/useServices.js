import { useEffect } from 'react';
import { useApp } from '../contexts/AppContext';

// Mock API call
const fetchServices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Wedding Photography",
          category: "photography",
          price: 1200,
          rating: 4.8,
          description: "Professional wedding photography package",
          provider: "Elite Photography",
          image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
          availableDates: ["2023-12-15", "2023-12-20", "2023-12-25"]
        },
        {
          id: 2,
          name: "Corporate Catering",
          category: "catering",
          price: 45,
          rating: 4.5,
          description: "Gourmet catering for corporate events",
          provider: "Tasteful Events",
          image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
          availableDates: ["2023-12-10", "2023-12-17", "2023-12-24"]
        },
        // Add more mock services
      ]);
    }, 1000);
  });
};

export const useServices = () => {
  const { state, dispatch } = useApp();

  useEffect(() => {
    const getServices = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const services = await fetchServices();
        dispatch({ type: 'SET_SERVICES', payload: services });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    getServices();
  }, [dispatch]);

  return {
    services: state.services,
    filteredServices: state.filteredServices,
    loading: state.loading,
    error: state.error
  };
};