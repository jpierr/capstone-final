// Main.js
import React, { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, getTodayDate } from './Api';
import { useNavigate } from 'react-router-dom';

export const initializeTimes = async (setAvailableTimes) => {
  try {
    const todayDate = getTodayDate();
    const times = await fetchAPI(todayDate);
    setAvailableTimes(times);
  } catch (error) {
    console.error('Error initializing times:', error);
  }
};

export const updateTimes = (date) => {
  // Implement logic to update available times based on the selected date
  // ...
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; // Replace with your implementation
};

function Main() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await initializeTimes(setAvailableTimes);
    };

    fetchData();
  }, []);

  const handleFormSubmit = async (formData) => {
    // Implement logic to handle form submission
    // For demonstration purposes, we assume success and navigate to the confirmation page

    // Assuming `formData.date` and `formData.time` are the selected date and time
    const confirmedDate = formData.date;
    const confirmedTime = formData.time;

    navigate('/confirmed', { state: { confirmedDate, confirmedTime } });
  };

  return (
    <div>
      <h1>Booking App</h1>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={(date) => {
          // Implement logic to update available times based on the selected date
          const updatedTimes = updateTimes(date);
          setAvailableTimes(updatedTimes);
        }}
        initializeTimes={() => initializeTimes(setAvailableTimes)}
        setBookedTimes={(bookedTimes) => {
          // Implement logic to handle booked times
          // ...
        }}
        submitForm={handleFormSubmit}
      />
    </div>
  );
}

export default Main;
