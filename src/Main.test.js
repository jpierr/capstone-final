// Main.test.js

import { render } from "@testing-library/react";
import Main, { initializeTimes, updateTimes } from './Main';

test('initializeTimes function returns the correct value', () => {
    const result = initializeTimes();
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes function returns the same value as provided in the state', () => {
    const result = updateTimes('someDate');
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('Renders the Main component', () => {
    render(<Main />);
    // Add additional assertions as needed
});
