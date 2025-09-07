const testimonios = [
  {
    nombre: "Laura G.",
    texto: "Gracias a D OR Agency multiplicamos nuestro ROAS y ahora tenemos leads de calidad cada semana.",
    empresa: "Ecommerce Moda",
  },
  {
    nombre: "Carlos M.",
    texto: "El equipo es súper profesional, transparente y siempre proponen ideas nuevas que funcionan.",
    empresa: "Startup SaaS",
  },
  {
    nombre: "Marta S.",
    texto: "Las creatividades UGC y la optimización de funnels nos permitieron escalar ventas como nunca antes.",
    empresa: "Marca Fitness",
  },
];

export default function Testimonios() {
  return (
    <section className="bg-bg py-16 border-b border-border">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-accent mb-10">Testimonios</h2>
        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto">
          {testimonios.map((t) => (
            <div
              key={t.nombre}
              className="bg-[#111112] border border-border rounded-xl p-8 shadow-gold min-w-[300px] md:min-w-[320px]"
            >
              <div className="text-muted text-sm mb-2">{t.empresa}</div>
              <p className="text-white italic mb-4">“{t.texto}”</p>
              <div className="text-accent font-bold">{t.nombre}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
