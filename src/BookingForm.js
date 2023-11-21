import React, { useState } from 'react';

function BookingForm({ availableTimes, updateTimes, initializeTimes, setBookedTimes, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      submitForm(formData);
      setFormData({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
      });
    } else {
      alert('Please fill in all required fields with valid values.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert the "guests" value to a number
    const processedValue = name === 'guests' ? parseInt(value, 10) : value;

    setFormData((prevData) => ({ ...prevData, [name]: processedValue }));

    // Validate the form here and set isFormValid
    const isValid = validateForm();
    setIsFormValid(isValid);

    if (name === 'date') {
      updateTimes(processedValue);
    }
  };

  const validateForm = () => {
    // Implement validation logic for each field
    const isDateValid = formData.date !== '';
    const isTimeValid = formData.time !== '';
    const isGuestsValid = formData.guests >= 1;

    return isDateValid && isTimeValid && isGuestsValid;
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select a time</option>
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
        required
      />

      <label htmlFor="res-occasion">Occasion</label>
      <input
        type="text"
        id="res-occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      />

      <input type="submit" value="Make Your reservation" disabled={!isFormValid} />
    </form>
  );
}

export default BookingForm;
