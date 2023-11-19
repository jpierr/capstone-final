// BookingForm.test.js
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM']; // Provide dummy data
    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
});
