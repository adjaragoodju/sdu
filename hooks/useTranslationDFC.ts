import { useContext } from "react";
import { TranslationContextDFC } from "@/providers/TranslationProviderDFC";

export function useTranslationDFC() {
  const context = useContext(TranslationContextDFC);
  if (!context) {
    throw new Error("useTranslationDFC must be used within TranslationProviderDFC");
  }
  return context; // { t, locale, setLocale }
}