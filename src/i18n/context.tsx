"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { en } from "./en";
import { pt } from "./pt";

export type Locale = "en" | "pt";
type Dict = typeof en;

const dicts: Record<Locale, Dict> = { en, pt };

const I18nContext = createContext<{
  locale: Locale;
  t: Dict;
  setLocale: (l: Locale) => void;
}>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  }, []);

  return (
    <I18nContext.Provider value={{ locale, t: dicts[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
