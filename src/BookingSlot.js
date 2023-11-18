// BookingSlot.js

import React from 'react';
import './App.css';

function BookingSlot({ time, isBooked }) {
  return (
    <div className={`booking-slot ${isBooked ? 'booked' : 'available'}`}>
      <p>{time}</p>
      {isBooked ? <span>Booked</span> : <button>Book Now</button>}
    </div>
  );
}

export default BookingSlot;

