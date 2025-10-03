import "@testing-library/jest-dom";
import { vi } from "vitest";

declare global {
  // eslint-disable-next-line no-var
  var fetch: typeof globalThis.fetch | undefined;
}

if (typeof globalThis.fetch === "undefined") {
  globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
    const url = typeof input === "string" ? input : input.toString();
    if (url.includes("/api/courses")) {
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(null, { status: 200 });
  }) as typeof globalThis.fetch;
}
