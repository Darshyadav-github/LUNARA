import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main headline', () => {
  render(<App />);
  const heading = screen.getByText(/futuristic elegance/i);
  expect(heading).toBeInTheDocument();
});
