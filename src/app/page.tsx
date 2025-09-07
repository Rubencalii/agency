
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogosEmpresas from "@/components/LogosEmpresas";
import Servicios from "@/components/Servicios";
import Beneficios from "@/components/Beneficios";
import CasosExito from "@/components/CasosExito";
import TestimoniosCarrusel from "@/components/TestimoniosCarrusel";
import Proceso from "@/components/Proceso";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import FormularioLead from "@/components/FormularioLead";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* HERO: Propuesta de valor y llamada a la acción */}
      <Hero />

      {/* LOGOS: Confianza y autoridad */}
      <LogosEmpresas />

      {/* SERVICIOS: Qué hacemos y cómo lo hacemos diferente */}
      <Servicios />
      <section className="bg-bg text-center py-6 border-b border-border">
        <p className="text-lg text-muted max-w-2xl mx-auto">
          <span className="text-accent font-serif">¿Por qué elegirnos?</span> Porque no solo gestionamos campañas: nos obsesiona tu rentabilidad. Cada euro invertido se traduce en datos, aprendizaje y resultados. Nuestro equipo senior te acompaña en cada paso, con reporting claro y comunicación directa.
        </p>
      </section>

      {/* BENEFICIOS: Métricas y resultados tangibles */}
      <Beneficios />
      <section className="bg-bg text-center py-6 border-b border-border">
        <p className="text-lg text-muted max-w-2xl mx-auto">
          <span className="text-accent font-serif">Resultados, no promesas:</span> Trabajamos con marcas que buscan escalar de verdad. Si buscas un partner que se implique y te diga la verdad, somos tu agencia.
        </p>
      </section>

      {/* CASOS DE ÉXITO: Prueba social y autoridad */}
      <CasosExito />
      <section className="bg-bg text-center py-6 border-b border-border">
        <p className="text-lg text-muted max-w-2xl mx-auto">
          <span className="text-accent font-serif">¿Quieres ser nuestro próximo caso de éxito?</span> Agenda una auditoría gratuita y descubre cómo podemos multiplicar tus resultados.
        </p>
      </section>

      {/* TESTIMONIOS: Opiniones reales */}
      <TestimoniosCarrusel />

      {/* PROCESO: Transparencia y claridad */}
      <Proceso />
      <section className="bg-bg text-center py-6 border-b border-border">
        <p className="text-lg text-muted max-w-2xl mx-auto">
          <span className="text-accent font-serif">Transparencia total:</span> Sin letra pequeña, sin ataduras. Solo resultados y acompañamiento real.
        </p>
      </section>

      {/* FAQ: Objeciones y dudas frecuentes */}
      <FAQ />

      {/* CTA FINAL: Última llamada a la acción */}
      <CTAFinal />

      {/* FORMULARIO LEAD: Captación directa */}
      <section className="bg-bg py-16 border-b border-border">
        <div className="max-w-[1160px] mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-accent mb-6 text-center">Solicita tu auditoría gratuita</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8 text-center">
            Cuéntanos tu situación y te diremos cómo escalar tu adquisición. Sin compromiso, sin spam.
          </p>
          <FormularioLead />
        </div>
      </section>

    </>
  );
}
