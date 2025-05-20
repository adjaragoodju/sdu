import { useContext } from "react";
import { TranslationContext } from "@/providers/TranslationProvider";

export function useTranslation() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useTranslation must be used within SDU TranslationProvider");
  }

  return context;
}
