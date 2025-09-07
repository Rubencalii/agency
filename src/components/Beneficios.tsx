"use client";
import Counter from "@/components/Counter";
const beneficios = [
  {
    titulo: "ROAS predecible",
    descripcion: "Enfoque en margen y retorno real para tu negocio.",
    valor: "+420% ROAS",
  },
  {
    titulo: "Creatividades UGC",
    descripcion: "Contenido que detiene el scroll y convierte.",
    valor: "+37% CTR",
  },
  {
    titulo: "Testing estructurado",
    descripcion: "Aprendizaje continuo y optimización constante.",
    valor: "-28% CPL",
  },
  {
    titulo: "Reporting claro",
    descripcion: "Decisiones basadas en datos, no en suposiciones.",
    valor: "100% Transparencia",
  },
];

export default function Beneficios() {
  return (
  <section className="bg-bg py-16 border-b border-border">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-accent mb-10">Beneficios & Resultados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((b) => (
            <div
              key={b.titulo}
              className="bg-bg border border-border rounded-xl p-8 shadow-gold text-center hover:scale-[1.03] transition-transform"
            >
              <div className="text-3xl font-bold text-accent mb-2">
                {b.valor.match(/([+-]?\d+)/) ? (
                  <Counter
                    value={parseInt(b.valor.match(/([+-]?\d+)/)?.[0] || "0")}
                    prefix={b.valor.startsWith("+") || b.valor.startsWith("-") ? b.valor[0] : ""}
                    suffix={b.valor.replace(/^[+-]?\d+/, "")}
                  />
                ) : b.valor}
              </div>
              <h3 className="font-serif text-lg text-accent mb-1">{b.titulo}</h3>
              <p className="text-muted text-sm">{b.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
