// BookingForm.js
import React, { useState } from 'react';

function BookingForm({ availableTimes, updateTimes, initializeTimes, setBookedTimes }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookedTimes((prevBookedTimes) => [...prevBookedTimes, formData.time]);
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
    if (name === 'date') {
      updateTimes(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="res-guests">Number of guests</label>
      <input
        type="number"
        id="res-guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
      />

      <label htmlFor="res-occasion">Occasion</label>
      <input
        type="text"
        id="res-occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      />

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
