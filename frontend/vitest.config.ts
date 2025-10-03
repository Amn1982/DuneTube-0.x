import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    css: true,
    globals: true,
  },
});
