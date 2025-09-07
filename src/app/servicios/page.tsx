import AnimatedCard from "@/components/AnimatedCard";
const servicios = [
  {
    titulo: "Facebook Ads",
    descripcion: "Gestión integral de campañas, funnel completo, CBO/ABO, retargeting y maximización de LTV.",
    detalles: [
      "Estrategias personalizadas para cada etapa del funnel",
      "Optimización diaria y reporting claro",
      "Retargeting avanzado y audiencias lookalike",
    ],
  },
  {
    titulo: "TikTok Ads",
    descripcion: "Creatividades nativas, hooks, whitelisting y Spark Ads para captar la atención y convertir.",
    detalles: [
      "Producción de vídeos UGC",
      "Testing de hooks y formatos",
      "Gestión de Spark Ads y whitelisting",
    ],
  },
  {
    titulo: "UGC Creatives",
    descripcion: "Guiones, producción y edición de contenido generado por usuarios para potenciar la autenticidad.",
    detalles: [
      "Casting y briefing de creadores",
      "Edición profesional y entrega rápida",
      "A/B testing de creatividades",
    ],
  },
  {
    titulo: "CRO & Landing Optimization",
    descripcion: "Hipótesis, A/B testing y analytics para mejorar la conversión de tus landings.",
    detalles: [
      "Análisis de comportamiento de usuario",
      "Implementación de tests A/B",
      "Optimización continua basada en datos",
    ],
  },
  {
    titulo: "Email/SMS Marketing",
    descripcion: "Automatizaciones y campañas personalizadas para fidelizar y reactivar clientes.",
    detalles: [
      "Segmentación avanzada",
      "Secuencias automatizadas",
      "Integración con CRM y reporting",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <h1 className="font-serif text-3xl md:text-5xl py-12 text-center">Nuestros Servicios</h1>
      {/* Introducción persuasiva */}
      <section className="bg-bg text-center py-6 border-b border-border">
        <p className="text-lg text-muted max-w-2xl mx-auto">
          <span className="text-accent font-serif">¿Qué nos hace diferentes?</span> En D OR Agency no ofrecemos servicios genéricos: diseñamos estrategias a medida, con foco en resultados y acompañamiento senior. Cada servicio está pensado para escalar tu negocio y maximizar tu rentabilidad.
        </p>
      </section>
      <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Ejemplo de imágenes ilustrativas para servicios */}
        <img src="https://images.pexels.com/photos/5716012/pexels-photo-5716012.jpeg" alt="Estrategia 1" className="rounded-xl mb-6 w-full object-cover max-h-64" />
        <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" alt="Estrategia 2" className="rounded-xl mb-6 w-full object-cover max-h-64" />
        {servicios.map((s) => (
          <AnimatedCard key={s.titulo} className="bg-bg border border-border rounded-xl p-8 shadow-gold hover:border-secondary transition">
            <h2 className="font-serif text-2xl text-accent mb-2">{s.titulo}</h2>
            <p className="text-muted mb-4">{s.descripcion}</p>
            <ul className="list-disc pl-5 text-sm text-text space-y-1">
              {s.detalles.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </AnimatedCard>
        ))}
      </div>
      {/* Valor diferencial y llamada a la acción */}
      <section className="bg-bg text-center py-10 border-b border-border mt-10">
        <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">¿Listo para llevar tu adquisición al siguiente nivel?</h2>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-6">
          Agenda una auditoría gratuita y descubre cómo podemos escalar tus campañas con estrategias personalizadas y creatividades que convierten.
        </p>
        <a href="/contacto" className="inline-block px-8 py-4 rounded-lg bg-accent text-black font-medium text-lg shadow-gold hover:scale-105 transition-transform">Solicita tu auditoría</a>
      </section>
    </main>
  );
}
