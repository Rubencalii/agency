const faqs = [
  {
    pregunta: "¿Trabajan solo con ecommerce?",
    respuesta: "No, ayudamos a empresas de distintos sectores: SaaS, servicios, educación, salud, etc.",
  },
  {
    pregunta: "¿Qué presupuesto mínimo necesito?",
    respuesta: "Recomendamos invertir al menos 1.000€/mes en ads para ver resultados óptimos.",
  },
  {
    pregunta: "¿Puedo cancelar en cualquier momento?",
    respuesta: "Sí, no hay permanencia. Trabajamos por resultados y confianza.",
  },
  {
    pregunta: "¿Cómo es el proceso de onboarding?",
    respuesta: "Rápido y sencillo: auditoría, objetivos, estrategia y ¡a escalar!",
  },
];

export default function FAQ() {
  return (
    <section className="bg-bg py-16 border-b border-border">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-accent mb-10">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-[#111112] border border-border rounded-xl p-6 shadow-gold group">
              <summary className="cursor-pointer font-serif text-accent text-lg mb-2 group-open:mb-4 transition-all">{faq.pregunta}</summary>
              <p className="text-muted text-sm mt-2">{faq.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
