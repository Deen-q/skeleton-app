import { render, screen } from '@testing-library/react';
import App from './App';

// DEFAULT TEST BELOW
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders the text TEST', () => {
  render(<App />);
  const textInspect = screen.getByText('TEST');
  expect(textInspect).toBeInTheDocument();
});