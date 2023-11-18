// Main.js

import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import './App.css';

export function initializeTimes() {
  // Your logic to initialize availableTimes
  // For simplicity, let's keep it the same for now
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function updateTimes(date) {
  // Your logic to update availableTimes based on the selected date
  // For simplicity, let's keep it the same for now
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function Main() {
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  const [bookedTimes, setBookedTimes] = useState(['18:00']);

  const updateTimes = (date) => {
    // Your logic to update availableTimes based on the selected date
    // For simplicity, let's keep it the same for now
    setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  };

  const initializeTimes = () => {
    // Your logic to initialize availableTimes
    // For simplicity, let's keep it the same for now
    setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  };

  return (
    <main className="main">
      <h2>Our Specialties</h2>
      <BookingForm updateTimes={updateTimes} initializeTimes={initializeTimes} setBookedTimes={setBookedTimes} />

      {/* Display booked and available slots */}
      <div className="booking-slots">
        {availableTimes.map((time) => (
          <BookingSlot key={time} time={time} isBooked={bookedTimes.includes(time)} />
        ))}
      </div>

      {/* Additional content as needed */}
    </main>
  );
}

export default Main;


