// Service categories
export const SERVICE_CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 'venue', label: 'Venues' },
  { value: 'catering', label: 'Catering' },
  { value: 'photography', label: 'Photography' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'decoration', label: 'Decoration' },
  { value: 'planning', label: 'Event Planning' },
  { value: 'audioVisual', label: 'Audio/Visual' },
  { value: 'transportation', label: 'Transportation' }
];

// Mock services data
export const MOCK_SERVICES = [
  {
    id: 1,
    name: "Luxury Wedding Venue",
    category: "venue",
    price: 5000,
    rating: 4.9,
    reviewCount: 127,
    description: "Elegant wedding venue with panoramic views, perfect for your special day. Capacity up to 300 guests.",
    provider: "Grand Event Spaces",
    providerSince: 2015,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availableDates: ["2023-12-15", "2023-12-20", "2023-12-25", "2024-01-05", "2024-01-12"],
    included: ["Tables & Chairs", "Basic Sound System", "Parking", "Setup & Cleanup"],
    additionalInfo: "Outside catering allowed with approval. Alcohol license available."
  },
  {
    id: 2,
    name: "Gourmet Catering Service",
    category: "catering",
    price: 75,
    rating: 4.7,
    reviewCount: 89,
    description: "Exquisite culinary experiences with customizable menus for any event type and size.",
    provider: "Tasteful Events Catering",
    providerSince: 2018,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availableDates: ["2023-12-10", "2023-12-17", "2023-12-24", "2024-01-07", "2024-01-14"],
    included: ["Menu Planning", "Food Preparation", "Serving Staff", "Tableware"],
    additionalInfo: "Vegetarian, vegan, and gluten-free options available. Tasting sessions offered."
  },
  {
    id: 3,
    name: "Professional Wedding Photography",
    category: "photography",
    price: 2500,
    rating: 4.8,
    reviewCount: 156,
    description: "Capture your special moments with our experienced wedding photographers and premium equipment.",
    provider: "Memorable Moments Photography",
    providerSince: 2012,
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availableDates: ["2023-12-12", "2023-12-19", "2023-12-28", "2024-01-06", "2024-01-13"],
    included: ["8 Hours Coverage", "2 Photographers", "Online Gallery", "Print Release"],
    additionalInfo: "Engagement sessions available. Albums and prints sold separately."
  },
  {
    id: 4,
    name: "Live Band Entertainment",
    category: "entertainment",
    price: 2000,
    rating: 4.6,
    reviewCount: 73,
    description: "Professional live band performing hits from various decades to keep your guests entertained all night.",
    provider: "The Event Players",
    providerSince: 2016,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availableDates: ["2023-12-14", "2023-12-21", "2023-12-30", "2024-01-08", "2024-01-15"],
    included: ["4 Hours Performance", "Sound Equipment", "Set Up & Break Down", "Song Requests"],
    additionalInfo: "Repertoire available on request. DJ services also available."
  },
  {
    id: 5,
    name: "Floral & Event Decoration",
    category: "decoration",
    price: 1500,
    rating: 4.5,
    reviewCount: 64,
    description: "Transform your venue with our stunning floral arrangements and decorative elements.",
    provider: "Blossom Events",
    providerSince: 2019,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availableDates: ["2023-12-13", "2023-12-18", "2023-12-27", "2024-01-09", "2024-01-16"],
    included: ["Consultation", "Centerpieces", "Ceremony Arrangements", "Setup"],
    additionalInfo: "Seasonal flowers used. Custom designs available."
  },
  {
    id: 6,
    name: "Corporate Event Planning",
    category: "planning",
    price: 3500,
    rating: 4.9,
    reviewCount: 42,
    description: "End-to-end corporate event planning services for conferences, seminars, and company celebrations.",
    provider: "ProEvent Planners",
    providerSince: 2014,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availableDates: ["2023-12-11", "2023-12-22", "2024-01-04", "2024-01-11", "2024-01-18"],
    included: ["Venue Sourcing", "Vendor Coordination", "Day-of Coordination", "Budget Management"],
    additionalInfo: "Virtual event planning also available. References upon request."
  }
];

// Time slots for booking
export const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

// Booking steps
export const BOOKING_STEPS = [
  { id: 1, title: "Service Selection" },
  { id: 2, title: "Date & Time" },
  { id: 3, title: "Your Details" },
  { id: 4, title: "Confirmation" }
];

// Price ranges for filtering
export const PRICE_RANGES = [
  { id: 1, label: "Under $500", min: 0, max: 500 },
  { id: 2, label: "$500 - $1000", min: 500, max: 1000 },
  { id: 3, label: "$1000 - $2000", min: 1000, max: 2000 },
  { id: 4, label: "$2000 - $5000", min: 2000, max: 5000 },
  { id: 5, label: "Over $5000", min: 5000, max: 10000 }
];

// Social media links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/eventspace",
  twitter: "https://twitter.com/eventspace",
  instagram: "https://instagram.com/eventspace",
  linkedin: "https://linkedin.com/company/eventspace"
};

// Contact information
export const CONTACT_INFO = {
  address: "123 Event Street, City, Country 12345",
  phone: "+1 (555) 123-4567",
  email: "info@eventspace.com",
  hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"
};

// API endpoints (mock for now)
export const API_ENDPOINTS = {
  services: "/api/services",
  bookings: "/api/bookings",
  categories: "/api/categories"
};

// Local storage keys
export const STORAGE_KEYS = {
  services: "eventSpace_services",
  bookings: "eventSpace_bookings",
  filters: "eventSpace_filters"
};

// Error messages
export const ERROR_MESSAGES = {
  generic: "Something went wrong. Please try again.",
  noServices: "No services match your criteria. Try adjusting your filters.",
  bookingFailed: "Failed to process your booking. Please check your information and try again.",
  validation: {
    name: "Please enter your full name",
    email: "Please enter a valid email address",
    phone: "Please enter a valid phone number",
    attendees: "Number of attendees must be at least 1",
    date: "Please select a valid date",
    time: "Please select a valid time"
  }
};

// Success messages
export const SUCCESS_MESSAGES = {
  booking: "Your booking has been confirmed! A confirmation email has been sent.",
  contact: "Your message has been sent. We'll get back to you soon."
};