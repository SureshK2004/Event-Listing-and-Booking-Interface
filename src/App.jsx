import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Header from './Components/common/Header';
import Footer from'./Components/common/Footer'; 
import ServiceList from './Components/services/ServiceList';
import ServiceModal from './Components/services/ServiceModal';
import BookingWizard from './Components/booking/BookingWizard';
import { AppProvider } from './contexts/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showBookingWizard, setShowBookingWizard] = useState(false);

  return (
    <AppProvider>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        
        {/* Hero Section */}
        <section className="hero-section">
          <Container>
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Find Perfect Event Services</h1>
              <p className="lead mb-4">Discover and book the best vendors for your next event</p>
              <Button 
                size="lg" 
                className="px-4 py-2"
                onClick={() => setShowBookingWizard(true)}
              >
                Book Now
              </Button>
            </div>
          </Container>
        </section>

        <main className="flex-grow-1">
          <Container>
            <ServiceList />
          </Container>
        </main>
        
        <Footer /> {/* Add Footer here */}
        
        <ServiceModal 
          show={showServiceModal} 
          onHide={() => setShowServiceModal(false)}
          onBook={() => {
            setShowServiceModal(false);
            setShowBookingWizard(true);
          }}
        />
        
        <BookingWizard 
          show={showBookingWizard} 
          onHide={() => setShowBookingWizard(false)}
        />
      </div>
    </AppProvider>
  );
}

export default App;