/**
 * Test suite for the `App` component.
 *
 * This suite verifies that the `App` component renders correctly
 * and includes the expected elements such as headers, form inputs,
 * and sidebar elements.
 *
 * Tests:
 * - Ensures the header element with the text "Promptyoo" is present.
 * - Verifies the presence of form input labels:
 *   - "R: What role you want AI to play?"
 *   - "A: What Audience you want AI to generate content for?"
 * - Confirms the sidebar contains the elements:
 *   - "Chat"
 *   - "New session"
 */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App Component", () => {
  it("renders correctly", () => {
    render(<App />);

    // Test for header elements
    expect(screen.getByText("Promptyoo")).toBeInTheDocument();

    // Test for form inputs
    expect(
      screen.getByText("R: What role you want AI to play?"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("A: What Audience you want AI to generate content for?"),
    ).toBeInTheDocument();

    // Test for sidebar elements
    expect(screen.getByText("Chat")).toBeInTheDocument();
    expect(screen.getByText("New session")).toBeInTheDocument();
  });
});
