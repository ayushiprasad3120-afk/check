"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  defaultConsentState,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent/consent-manager";
import type { ConsentCategory } from "@/config/consent.config";

interface ConsentContextValue {
  consent: ConsentState;
  hasChosen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  updateCategory: (category: ConsentCategory, value: boolean) => void;
}

const ConsentContext = createContext<ConsentContextValue | undefined>(undefined);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(defaultConsentState);
  const [hasChosen, setHasChosen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setConsent(stored);
      setHasChosen(true);
    }
  }, []);

  const persist = (next: ConsentState, chosen = true) => {
    setConsent(next);
    setHasChosen(chosen);
    writeConsent(next);
  };

  return (
    <ConsentContext.Provider
      value={{
        consent,
        hasChosen,
        acceptAll: () => persist({ necessary: true, analytics: true, marketing: true }),
        rejectNonEssential: () => persist({ necessary: true, analytics: false, marketing: false }),
        updateCategory: (category, value) =>
          persist({ ...consent, [category]: category === "necessary" ? true : value }),
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
