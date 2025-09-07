const casos = [
  {
    empresa: "Ecommerce Moda",
    problema: "ROAS bajo y alto coste por adquisición.",
    estrategia: "Optimización de funnel, creatividades UGC y testing de audiencias.",
    resultado: "+420% ROAS, -28% CPL",
  },
  {
    empresa: "Startup SaaS",
    problema: "Dificultad para escalar campañas y captar leads cualificados.",
    estrategia: "Implementación de campañas multi-plataforma y automatización de reporting.",
    resultado: "+37% leads, +110% LTV",
  },
  {
    empresa: "Marca Fitness",
    problema: "Bajo engagement y poco retorno en TikTok Ads.",
    estrategia: "Creatividades nativas, Spark Ads y optimización de landing.",
    resultado: "+62% CTR, +180% ventas",
  },
];

export default function CasosExito() {
  return (
    <section className="bg-bg py-16 border-b border-border">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-accent mb-10">Casos de Éxito</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {casos.map((c) => (
            <div
              key={c.empresa}
              className="bg-[#111112] border border-border rounded-xl p-8 shadow-gold hover:scale-[1.03] transition-transform"
            >
              <h3 className="font-serif text-lg text-accent mb-2">{c.empresa}</h3>
              <div className="text-muted text-sm mb-2">{c.problema}</div>
              <div className="text-white text-sm mb-2"><span className="font-bold">Estrategia:</span> {c.estrategia}</div>
              <div className="text-accent font-bold text-lg">{c.resultado}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
