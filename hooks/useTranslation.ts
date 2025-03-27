import { TranslationContext } from "@/providers/TranslationProvider";
import { useContext } from "react";

export function useTranslation() {
    const context = useContext(TranslationContext);
    if (!context) throw new Error("useTranslation must be used within TranslationProvider");
    return context;
}
