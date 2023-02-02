import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import About from "../../pages/About";
import { BrowserRouter } from "react-router-dom";

test("full app rendering/navigating", async () => {
  render(<About />, { wrapper: BrowserRouter });

  expect(screen.getByText(/About Component/i)).toBeInTheDocument();
});

test("full app rendering/", async () => {
  render(<About />, { wrapper: BrowserRouter });

  expect(screen.getByTestId("title-About")).toBeInTheDocument();
});
