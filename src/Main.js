// Main.js
import React, { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, getTodayDate } from './Api';

function Main() {
  const [availableTimes, setAvailableTimes] = useState([]);

  const initializeTimes = async () => {
    const todayDate = getTodayDate();
    const times = await fetchAPI(todayDate);
    setAvailableTimes(times);
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <div>
      <h1>Booking App</h1>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={(date) => {
          // Implement logic to update available times based on the selected date
          // ...
        }}
        initializeTimes={initializeTimes}
        setBookedTimes={(bookedTimes) => {
          // Implement logic to handle booked times
          // ...
        }}
      />
    </div>
  );
}

export default Main;
