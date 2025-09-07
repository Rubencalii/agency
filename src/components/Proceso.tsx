const pasos = [
  {
    titulo: "Auditoría & Objetivos",
    descripcion: "Analizamos tu situación y definimos metas claras y alcanzables.",
    icono: "🔍",
  },
  {
    titulo: "Estrategia & Creatividades",
    descripcion: "Diseñamos la estrategia y producimos creatividades UGC que convierten.",
    icono: "🧠",
  },
  {
    titulo: "Lanzamiento & Testeo",
    descripcion: "Ponemos en marcha campañas y testeamos para aprender rápido.",
    icono: "🚀",
  },
  {
    titulo: "Escalado & Optimización",
    descripcion: "Escalamos lo que funciona y optimizamos para maximizar resultados.",
    icono: "📈",
  },
];

export default function Proceso() {
  return (
    <section className="bg-bg py-16 border-b border-border">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-accent mb-10">Nuestro Proceso</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {pasos.map((p, i) => (
            <div
              key={p.titulo}
              className="bg-[#111112] border border-border rounded-xl p-8 shadow-gold text-center relative"
            >
              <div className="text-4xl mb-4">{p.icono}</div>
              <h3 className="font-serif text-lg text-accent mb-2">{i+1}. {p.titulo}</h3>
              <p className="text-muted text-sm">{p.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
