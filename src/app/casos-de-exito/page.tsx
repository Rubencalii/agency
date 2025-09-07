import AnimatedCard from "@/components/AnimatedCard";
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

export default function Page() {
  return (
    <main className="min-h-screen bg-bg text-text">
  <h1 className="font-serif text-3xl md:text-5xl py-12 text-center">Casos de Éxito</h1>
  {/* Imagen ilustrativa de resultados */}
  <img src="https://img.freepik.com/foto-gratis/empresario-tableta-analizando-grafico-crecimiento-virtual_53876-104051.jpg" alt="Resultados" className="rounded-xl mb-8 w-full object-cover max-h-72" />
  <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {casos.map((c) => (
          <AnimatedCard key={c.empresa} className="bg-bg border border-border rounded-xl p-8 shadow-gold hover:border-secondary transition">
            <h2 className="font-serif text-xl text-accent mb-2">{c.empresa}</h2>
            <div className="text-muted text-sm mb-2">{c.problema}</div>
            <div className="text-text text-sm mb-2"><span className="font-bold">Estrategia:</span> {c.estrategia}</div>
            <div className="text-secondary font-bold text-lg">{c.resultado}</div>
          </AnimatedCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="/" className="inline-block px-6 py-3 rounded-lg bg-secondary text-white font-medium text-lg shadow-gold hover:scale-105 transition-transform">Volver a inicio</a>
      </div>
    </main>
  );
}
