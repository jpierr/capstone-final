import { useLocation } from 'react-router-dom';
import React from 'react';

function ConfirmedBooking() {
  // Access location state to get confirmedDate and confirmedTime
  const { state } = useLocation();
  const confirmedDate = state?.confirmedDate || '';
  const confirmedTime = state?.confirmedTime || '';

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Your booking for {confirmedDate} at {confirmedTime} has been confirmed. Thank you for choosing Little Lemon!</p>
    </div>
  );
}

export default ConfirmedBooking;
