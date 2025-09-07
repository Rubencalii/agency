import FormularioLead from "@/components/FormularioLead";
import CalendlyModal from "@/components/CalendlyModal";

export default function Page() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <h1 className="font-serif text-3xl md:text-5xl py-12 text-center">Contacto</h1>
      <FormularioLead />
      <CalendlyModal />
    </main>
  );
}
