import { useState, useEffect } from 'react';
import axios from 'axios';
import AppContent from './AppContent';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState({ loading: false, message: 'System Ready', error: false });
  const [activeStep, setActiveStep] = useState(0);

  const handleCall = async (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    setStatus({ loading: true, message: 'Calling...', error: false });
    setActiveStep(1);

    try {
      // Send the request to our backend
      const response = await axios.post('http://localhost:5001/api/call', { phoneNumber });
      
      if (response.data.success) {
        // Simulate the steps visually
        let step = 1;
        const interval = setInterval(() => {
          step++;
          if (step <= 5) {
            setActiveStep(step);
            if (step === 2) setStatus({ loading: true, message: 'TTS Greeting Active', error: false });
            if (step === 3) setStatus({ loading: true, message: 'Waiting for DTMF input', error: false });
            if (step === 4) setStatus({ loading: true, message: 'Processing Option 1', error: false });
            if (step === 5) setStatus({ loading: false, message: 'Call Ended', error: false });
          } else {
            clearInterval(interval);
          }
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ 
        loading: false, 
        message: 'Failed to connect.', 
        error: true 
      });
      setActiveStep(0);
    }
  };

  const resetSimulation = () => {
    setActiveStep(0);
    setStatus({ loading: false, message: 'System Ready', error: false });
    setPhoneNumber('');
  };

  return (
    <>
      <AppContent 
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        handleCall={handleCall}
        status={status}
        activeStep={activeStep}
        resetSimulation={resetSimulation}
      />
    </>
  );
}

export default App;
