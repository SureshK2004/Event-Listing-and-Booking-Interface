import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  services: [],
  filteredServices: [],
  selectedService: null,
  bookingData: {
    service: null,
    dateTime: null,
    details: {
      name: '',
      email: '',
      phone: '',
      attendees: 1,
      specialRequests: ''
    }
  },
  loading: false,
  error: null,
  filters: {
    category: 'all',
    priceRange: [0, 1000],
    searchQuery: ''
  }
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_SERVICES':
      return { ...state, services: action.payload, filteredServices: action.payload };
    case 'SET_FILTERED_SERVICES':
      return { ...state, filteredServices: action.payload };
    case 'SET_SELECTED_SERVICE':
      return { ...state, selectedService: action.payload };
    case 'SET_BOOKING_DATA':
      return { ...state, bookingData: { ...state.bookingData, ...action.payload } };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'RESET_BOOKING':
      return { ...state, bookingData: initialState.bookingData };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}