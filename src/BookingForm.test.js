import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Form does not submit with invalid data', () => {
  const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM'];
  // Define mock functions for updateTimes and submitForm
  const mockUpdateTimes = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      updateTimes={mockUpdateTimes}
      submitForm={mockSubmitForm}
    />
  );

  // Fill in the form fields with invalid data
  fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: "" } });
  fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: "" } });
  fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: 0 } });

  // Submit the form
  fireEvent.click(screen.getByText("Make Your reservation"));

  // Expect that updateTimes and submitForm are not called since the form is invalid
  expect(mockUpdateTimes).not.toHaveBeenCalled();
  expect(mockSubmitForm).not.toHaveBeenCalled();
});

test('Form submits with valid data', () => {
  const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM'];
  // Define mock functions for updateTimes and submitForm
  const mockUpdateTimes = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      updateTimes={mockUpdateTimes}
      submitForm={mockSubmitForm}
    />
  );

  // Fill in the form fields with valid data
  fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: "2023-12-01" } });
  fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: "10:00 AM" } });
  fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: 2 } });

  // Submit the form
  fireEvent.click(screen.getByText("Make Your reservation"));

  // Expect that updateTimes and submitForm are called with the correct arguments
  expect(mockUpdateTimes).toHaveBeenCalledWith("2023-12-01");
  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: "2023-12-01",
    time: "10:00 AM",
    guests: 2,
    occasion: 'Birthday',
  });
});
