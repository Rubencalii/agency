const servicios = [
  {
    titulo: "Facebook Ads",
    descripcion: "Funnel completo, CBO/ABO, retargeting, LTV.",
    icono: "📈",
  },
  {
    titulo: "TikTok Ads",
    descripcion: "Creatividades nativas, hooks, whitelisting, Spark Ads.",
    icono: "🎬",
  },
  {
    titulo: "UGC Creatives",
    descripcion: "Guiones, producción y edición de contenido UGC.",
    icono: "🎥",
  },
  {
    titulo: "CRO & Landing Optimization",
    descripcion: "Hipótesis, A/B testing y analytics.",
    icono: "🧪",
  },
  {
    titulo: "Email/SMS Marketing",
    descripcion: "Automatizaciones y campañas personalizadas.",
    icono: "✉️",
  },
];

export default function Servicios() {
  return (
    <section className="bg-bg py-16 border-b border-border">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-accent mb-10">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className="bg-[#111112] border border-border rounded-xl p-8 shadow-gold hover:scale-[1.03] transition-transform"
            >
              <div className="text-4xl mb-4">{servicio.icono}</div>
              <h3 className="font-serif text-xl text-accent mb-2">{servicio.titulo}</h3>
              <p className="text-muted">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
