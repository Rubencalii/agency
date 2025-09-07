import AnimatedCard from "@/components/AnimatedCard";
const equipo = [
  {
    nombre: "Rubén García",
    rol: "Founder & Estratega Digital",
    bio: "Especialista en performance y growth, con más de 10 años ayudando a marcas a escalar en digital.",
  },
  {
    nombre: "Laura Pérez",
    rol: "Directora Creativa",
    bio: "Experta en UGC y creatividad para campañas de alto impacto en social media.",
  },
  {
    nombre: "Carlos Martínez",
    rol: "Paid Media Manager",
    bio: "Gestor de campañas Facebook/TikTok Ads, obsesionado con el ROAS y la optimización.",
  },
];

const valores = [
  "Transparencia y comunicación constante",
  "Orientación a resultados reales",
  "Adaptabilidad y creatividad",
  "Socios estratégicos, no solo proveedores",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-bg text-text">
  <h1 className="font-serif text-3xl md:text-5xl py-12 text-center">Sobre Nosotros</h1>
  {/* Imagen ilustrativa de equipo y estrategia */}
  <img src="https://www.iebschool.com/blog/wp-content/uploads/2022/01/estrategia-digital.jpg" alt="Equipo y Estrategia" className="rounded-xl mb-8 w-full object-cover max-h-72" />
      <section className="max-w-[900px] mx-auto px-6 mb-12">
        <h2 className="font-serif text-2xl text-accent mb-4">Nuestra Propuesta de Valor</h2>
        <p className="text-muted mb-6">En D OR Agency nacimos con una idea clara: ayudar a empresas y profesionales a crecer en la nueva era digital. Más que una agencia, buscamos ser un socio estratégico para las empresas que confían en nosotros.</p>
      </section>
      <section className="max-w-[900px] mx-auto px-6 mb-12">
        <h2 className="font-serif text-2xl text-accent mb-4">Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipo.map((p) => (
            <AnimatedCard key={p.nombre} className="bg-bg border border-border rounded-xl p-6 shadow-gold hover:border-secondary transition">
              <h3 className="font-serif text-lg text-accent mb-1">{p.nombre}</h3>
              <div className="text-text font-medium mb-1">{p.rol}</div>
              <div className="text-muted text-sm">{p.bio}</div>
            </AnimatedCard>
          ))}
        </div>
      </section>
      <section className="max-w-[900px] mx-auto px-6 mb-12">
        <h2 className="font-serif text-2xl text-accent mb-4">Nuestros Valores</h2>
        <ul className="list-disc pl-5 text-muted space-y-1">
          {valores.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </section>
      <div className="text-center mt-10">
        <a href="/" className="inline-block px-6 py-3 rounded-lg bg-secondary text-white font-medium text-lg shadow-gold hover:scale-105 transition-transform">Volver a inicio</a>
      </div>
    </main>
  );
}
