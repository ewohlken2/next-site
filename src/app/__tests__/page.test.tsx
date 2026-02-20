import { render, screen } from "@testing-library/react";
import Page from "../page";

jest.mock("../about/page", () => ({
  __esModule: true,
  default: () => <div data-testid="about-homepage">About Homepage</div>,
}));

test("uses the about page for the homepage route", () => {
  render(<Page />);

  expect(screen.getByTestId("about-homepage")).toBeInTheDocument();
  expect(screen.queryByText(/where hype becomes reality/i)).not.toBeInTheDocument();
});
