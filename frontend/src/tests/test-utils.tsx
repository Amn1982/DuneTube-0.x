import React, { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

import { PreferencesProvider } from "../context/PreferencesContext";
import "../i18n";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MemoryRouter>
      <PreferencesProvider>{children}</PreferencesProvider>
    </MemoryRouter>
  );
}

export * from "@testing-library/react";
