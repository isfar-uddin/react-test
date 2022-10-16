import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("learn-react");
  expect(linkElement).toBeInTheDocument();
});

test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: "Learn React" });
  //expect(linkElement.getAttribute("href")).toContain("discover.goava.com");
  expect(linkElement.getAttribute("href")).toMatchInlineSnapshot(
    `"https://discover.goava.com"`
  );
})

test('url is correct using test id', () => {
  render(<App />);
  const linkElement = screen.getByTestId("learn-react");
  expect(linkElement.getAttribute("href")).toContain("discover.goava.com");
})