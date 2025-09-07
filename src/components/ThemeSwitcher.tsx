"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(storedTheme || (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!theme) return null;

  return (
    <button
      aria-label="Cambiar tema"
      className={`ml-4 px-3 py-2 rounded-lg border border-border font-medium transition
        ${theme === "dark" ? "bg-bg text-accent hover:bg-accent hover:text-bg" : "bg-bg-light text-accent hover:bg-accent hover:text-bg-light"}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌞 Claro" : "🌙 Oscuro"}
    </button>
  );
}
