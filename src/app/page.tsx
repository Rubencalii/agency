
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogosEmpresas from "@/components/LogosEmpresas";
import Servicios from "@/components/Servicios";
import Beneficios from "@/components/Beneficios";
import CasosExito from "@/components/CasosExito";
import Testimonios from "@/components/Testimonios";
import Proceso from "@/components/Proceso";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
  <LogosEmpresas />
  <Servicios />
  <Beneficios />
  <CasosExito />
  <Testimonios />
  <Proceso />
  <FAQ />
  <CTAFinal />
  <Footer />
    </>
  );
}
