import React, { useState } from 'react';
import './App.css';

function BookingForm({ updateTimes, initializeTimes, setBookedTimes }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update state or perform other actions based on the form data
    // ...

    // Example: Add the selected time to bookedTimes
    setBookedTimes((prevBookedTimes) => [...prevBookedTimes, formData.time]);

    // Reset the form
    setFormData({
      date: '',
      time: '',
      guests: 1,
      occasion: 'Birthday',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Update available times when the date changes
    if (name === 'date') {
      updateTimes(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} />

      {/* ... (rest of the form) */}

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
