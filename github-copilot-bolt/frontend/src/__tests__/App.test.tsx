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
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App Component", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

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

  describe("Prompt Optimization", () => {
    it("should show loading state while optimizing prompt", async () => {
      render(<App />);
      
      const button = screen.getByTestId("optimize-button");
      fireEvent.click(button);
      
      expect(screen.getByText("Optimizing...")).toBeInTheDocument();
      expect(button).toBeDisabled();
    });

    it("should handle successful API response", async () => {
      global.fetch = vi.fn().mockImplementation(() => {
        const reader = new ReadableStream({
          start(controller) {
            controller.enqueue(new TextEncoder().encode('data: {"content": "optimized prompt"}\n'));
            controller.close();
          }
        });
        
        return Promise.resolve({
          ok: true,
          body: reader,
          status: 200,
          headers: new Headers()
        });
      });
      
      render(<App />);
      
      const button = screen.getByTestId("optimize-button");
      fireEvent.click(button);
      
      await screen.findByText("optimized prompt");
      
      expect(screen.getByText("optimized prompt")).toBeInTheDocument();
      expect(screen.queryByText("Optimizing...")).not.toBeInTheDocument();
    });

    it("should handle API error response", async () => {
      global.fetch = vi.fn().mockRejectedValue(new Error("API Error"));
      
      render(<App />);
      
      const button = screen.getByTestId("optimize-button");
      fireEvent.click(button);
      
      await screen.findByText(/Failed to get response from DeepSeek/);
      
      expect(screen.getByText(/Failed to get response from DeepSeek/)).toBeInTheDocument();
      expect(screen.queryByText("Optimizing...")).not.toBeInTheDocument();
    });

    it("should handle API timeout", async () => {
      vi.useFakeTimers();
      global.fetch = vi.fn(() => new Promise(() => {}));
      
      render(<App />);
      
      const button = screen.getByTestId("optimize-button");
      fireEvent.click(button);
      
      await act(async () => {
        vi.advanceTimersByTime(31000);
      });
      
      expect(screen.getByTestId("error-message")).toHaveTextContent(
        "DeepSeek is not responding"
      );
      expect(screen.queryByText("Optimizing...")).not.toBeInTheDocument();
      
      vi.useRealTimers();
    });
  });
});
