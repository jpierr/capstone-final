import { render, screen } from "@testing-library/react";
import App from './App';

test('renders App component', () => {
  render(<App />);
  const headerElement = screen.getByText("Little Lemon Restaurant");
  expect(headerElement).toBeInTheDocument();

  // Add more assertions as needed for other elements in your App component
});
