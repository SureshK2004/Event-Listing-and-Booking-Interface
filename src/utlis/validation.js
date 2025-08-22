// src/utils/validation.js
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[\+]?[1-9][\d]{0,15}$/;
  return re.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const validateBookingDetails = (details) => {
  const errors = {};
  
  if (!details.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!validateEmail(details.email)) {
    errors.email = 'Valid email is required';
  }
  
  if (!validatePhone(details.phone)) {
    errors.phone = 'Valid phone number is required';
  }
  
  if (!details.attendees || details.attendees < 1) {
    errors.attendees = 'Number of attendees must be at least 1';
  }
  
  return errors;
};