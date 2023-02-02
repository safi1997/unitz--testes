import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Safi from "../../pages/Safi";
import { BrowserRouter } from "react-router-dom";

test("full app rendering/navigating", async () => {
  render(<Safi />, { wrapper: BrowserRouter });

  expect(screen.getByText(/Safis Component/i)).toBeInTheDocument();
});

test("full app rendering/", async () => {
  render(<Safi />, { wrapper: BrowserRouter });

  expect(screen.getByTestId("title-Safi")).toBeInTheDocument();
});
