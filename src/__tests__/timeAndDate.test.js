import { render, screen } from '@testing-library/react'
import TimeAndDate from '../components/TimeAndDate'


const originalDate = global.Date;
beforeAll(() => {
    global.Date = class extends Date {
        constructor() {
            super('2023-10-13T12:34:56Z');
        }
    };
});

afterAll(() => {
    global.Date = originalDate;
});

test('renders the correct time', () => {
    const { getByText } = render(<TimeAndDate />);
    const timeElement = getByText(/(\d{2}:\d{2})/);

    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveTextContent('2:34:56 PM');
});

test('renders the correct date', async () => {
    render(<TimeAndDate />)
    await screen.findByText(/Thursday | October 13/)
});


