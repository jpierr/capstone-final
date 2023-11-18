// Main.js

import React, { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, getTodayDate, submitAPI } from './Api';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();

  const initializeTimes = async () => {
    const todayDate = getTodayDate();
    const times = await fetchAPI(todayDate);
    setAvailableTimes(times);
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  const submitForm = async (formData) => {
    const date = formData.date; // Extract date from form data
    const time = formData.time; // Extract time from form data
    const isBookingSuccessful = await submitAPI(formData, date, time);

    if (isBookingSuccessful) {
      navigate('/confirmed', { state: { confirmedDate: date, confirmedTime: time } });
    }
    // You can add more logic or feedback for unsuccessful bookings if needed
  };

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
        submitForm={submitForm} // Pass the submitForm function to the BookingForm
      />
    </div>
  );
}

export default Main;
