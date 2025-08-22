import React, { useState } from 'react';
import { Modal, ProgressBar } from 'react-bootstrap';
import Step1ServiceSelection from './Step1ServiceSelection';
import Step2DateTime from './Step2DateTime';
import Step3Details from './Step3Details';
import Step4Confirmation from './Step4Confirmation';

const BookingWizard = ({ show, onHide }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const progress = (currentStep / totalSteps) * 100;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Book Your Event Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProgressBar now={progress} className="mb-4" />
        
        {currentStep === 1 && <Step1ServiceSelection onNext={nextStep} />}
        {currentStep === 2 && <Step2DateTime onNext={nextStep} onBack={prevStep} />}
        {currentStep === 3 && <Step3Details onNext={nextStep} onBack={prevStep} />}
        {currentStep === 4 && <Step4Confirmation onComplete={onHide} onBack={prevStep} />}
      </Modal.Body>
    </Modal>
  );
};

export default BookingWizard;