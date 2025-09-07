const posts = [
  {
    titulo: "Tendencias en Facebook Ads 2025",
    resumen: "Descubre las estrategias más efectivas para escalar campañas en la nueva era de la publicidad digital.",
    fecha: "01/09/2025",
  },
  {
    titulo: "Cómo crear Creatividades UGC que convierten",
    resumen: "Guía práctica para producir contenido auténtico y persuasivo para tus anuncios.",
    fecha: "20/08/2025",
  },
  {
    titulo: "Optimización de Landings para Performance",
    resumen: "Claves para mejorar la conversión de tus páginas y maximizar el ROAS.",
    fecha: "10/08/2025",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <h1 className="font-serif text-3xl md:text-5xl py-12 text-center">Blog & Insights</h1>
      <div className="max-w-[900px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((p) => (
          <div key={p.titulo} className="bg-bg border border-border rounded-xl p-8 shadow-gold hover:border-secondary transition">
            <div className="text-xs text-muted mb-2">{p.fecha}</div>
            <h2 className="font-serif text-xl text-accent mb-2">{p.titulo}</h2>
            <p className="text-text text-sm mb-2">{p.resumen}</p>
            <a href="#" className="text-secondary underline text-sm hover:text-accent transition">Leer más</a>
          </div>
        ))}
      </div>
    </main>
  );
}
