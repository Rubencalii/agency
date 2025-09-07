import { useState } from "react";

const langs = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export default function LangSwitcher() {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lang") || "es";
    }
    return "es";
  });

  function changeLang(code: string) {
    setLang(code);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", code);
      window.location.reload();
    }
  }

  return (
    <select
      aria-label="Seleccionar idioma"
      value={lang}
      onChange={e => changeLang(e.target.value)}
      className="ml-2 px-2 py-1 rounded border border-border bg-bg text-accent hover:bg-accent hover:text-bg transition"
    >
      {langs.map(l => (
        <option key={l.code} value={l.code}>{l.label}</option>
      ))}
    </select>
  );
}
