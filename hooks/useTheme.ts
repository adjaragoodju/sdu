"use client";
import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        return "dark";
        // #TODO fix the logic with theme switching
        /*   if (typeof window === "undefined") return "dark";
          return (
              (localStorage.getItem("theme") as "light" | "dark") ||
              (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
          ); */
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return {
        theme,
        toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    };
};
