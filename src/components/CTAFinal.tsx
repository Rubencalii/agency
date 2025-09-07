export default function CTAFinal() {
  return (
    <section className="bg-bg py-16 border-b border-border">
      <div className="max-w-[1160px] mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-accent mb-6">¿Listo para crecer? Conversemos 20 minutos.</h2>
        <a href="/contacto" className="inline-block px-8 py-4 rounded-lg bg-accent text-black font-medium text-lg shadow-gold hover:scale-105 transition-transform">Agenda una llamada</a>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          {/* Trust badges o logos de partners */}
          <span className="bg-bg border border-border rounded px-4 py-2 text-muted text-xs">GDPR Compliant</span>
          <span className="bg-bg border border-border rounded px-4 py-2 text-muted text-xs">SSL Secure</span>
          <span className="bg-bg border border-border rounded px-4 py-2 text-muted text-xs">+10 años experiencia</span>
        </div>
      </div>
    </section>
  );
}
