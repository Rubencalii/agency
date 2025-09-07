"use client";

import { useRouter, usePathname } from 'next/navigation';


const langs = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];


export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'es';

  function changeLang(code: string) {
    const newPath = pathname.replace(/^\/(es|en)/, '/' + code);
    router.push(newPath);
  }

  return (
    <select
      aria-label="Seleccionar idioma"
      value={currentLocale}
      onChange={e => changeLang(e.target.value)}
      className="ml-2 px-2 py-1 rounded border border-border bg-bg text-accent hover:bg-accent hover:text-bg transition"
    >
      {langs.map(l => (
        <option key={l.code} value={l.code}>{l.label}</option>
      ))}
    </select>
  );
}
