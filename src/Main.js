import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import './App.css';

const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Your logic to update availableTimes based on the selected date
      // For simplicity, let's keep it the same for now
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(reducer, initialState);
  const [bookedTimes, setBookedTimes] = useState(['18:00']);

  const updateTimes = (date) => {
    // Your logic to update availableTimes based on the selected date
    // For simplicity, let's keep it the same for now
    dispatch({ type: 'UPDATE_TIMES' });
  };

  const initializeTimes = () => {
    // Your logic to initialize availableTimes
    // For simplicity, let's keep it the same for now
    dispatch({ type: 'INITIALIZE_TIMES' });
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
