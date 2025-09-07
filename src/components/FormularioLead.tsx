"use client";
import { useState } from "react";

export default function FormularioLead() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // Aquí deberías conectar con tu backend, CRM o servicio de email
    // Simulación de éxito
    setTimeout(() => setEnviado(true), 1000);
  }

  if (enviado) {
  return <div className="p-8 bg-bg rounded-xl text-accent text-center">¡Gracias! Te contactaremos pronto.</div>;
  }

  return (
  <form onSubmit={handleSubmit} className="bg-bg border border-border rounded-xl p-8 max-w-xl mx-auto flex flex-col gap-4 shadow-gold">
  <input name="nombre" type="text" required placeholder="Nombre" className="px-4 py-3 rounded bg-bg border border-border text-text" />
  <input name="email" type="email" required placeholder="Email" className="px-4 py-3 rounded bg-bg border border-border text-text" />
  <input name="empresa" type="text" required placeholder="Empresa" className="px-4 py-3 rounded bg-bg border border-border text-text" />
  <input name="facturacion" type="text" required placeholder="Facturación mensual aproximada" className="px-4 py-3 rounded bg-bg border border-border text-text" />
  <select name="objetivo" required className="px-4 py-3 rounded bg-bg border border-border text-text">
        <option value="">¿Cuál es tu objetivo principal?</option>
        <option>Generar más ventas</option>
        <option>Captar leads</option>
        <option>Mejorar branding</option>
        <option>Otro</option>
      </select>
  <input name="web" type="url" placeholder="Enlace web (opcional)" className="px-4 py-3 rounded bg-bg border border-border text-text" />
  <textarea name="mensaje" rows={3} placeholder="Mensaje" className="px-4 py-3 rounded bg-bg border border-border text-text" />
      {/* Honeypot */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" className="px-6 py-3 rounded-lg bg-accent text-black font-medium mt-2">Enviar</button>
    </form>
  );
}
