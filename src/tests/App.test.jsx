import { render, screen } from "@testing-library/react";
import App from "../App";

it("Should render App component", () => {
  render(<App />);
  expect(screen.getByText("Hi there")).toBeInTheDocument();
});
