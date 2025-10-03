import React from "react";
import { describe, expect, it } from "vitest";

import { Providers, render, screen } from "./test-utils";

import App from "../App";

describe("App smoke", () => {
  it("renders navigation items", () => {
    render(<App />, { wrapper: Providers });
    const navItems = screen.getAllByText(/home|catalog/i);
    expect(navItems.length).toBeGreaterThan(0);
  });
});
