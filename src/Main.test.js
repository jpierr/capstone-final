import { render, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Add this import
import Main, { initializeTimes, updateTimes } from './Main';

test('initializeTimes function returns the correct value', async () => {
  const setAvailableTimes = jest.fn();
  await act(async () => {
    await initializeTimes(setAvailableTimes);
  });
  expect(setAvailableTimes).toHaveBeenCalledWith(['10:00 AM', '12:00 PM', '2:00 PM']); // Replace with your expected values
});

test('updateTimes function returns the same value as provided in the state', () => {
  const result = updateTimes('someDate');
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('Renders the Main component', () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  // Add additional assertions as needed
});
