import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

export default function TestimoniosCarrusel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  function next() {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonios.length);
  }
  function prev() {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  }

  return (
    <section className="bg-bg py-16 border-b border-border">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-accent mb-10 text-center">Testimonios</h2>
        <div className="relative flex flex-col items-center">
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-accent text-white rounded-full p-2 shadow-gold hover:bg-secondary transition z-10">
            &#8592;
          </button>
          <div className="w-full max-w-md min-h-[220px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-bg border border-border rounded-xl p-8 shadow-gold text-center"
              >
                <div className="text-muted text-sm mb-2">{testimonios[index].empresa}</div>
                <p className="text-text italic mb-4">“{testimonios[index].texto}”</p>
                <div className="text-accent font-bold">{testimonios[index].nombre}</div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-accent text-white rounded-full p-2 shadow-gold hover:bg-secondary transition z-10">
            &#8594;
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonios.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-accent" : "bg-border"}`}
              aria-label={`Ver testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
