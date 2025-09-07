import FormularioLead from "@/components/FormularioLead";
import CalendlyModal from "@/components/CalendlyModal";
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations();
  return (
    <main className="min-h-screen bg-bg text-text">
      <h1 className="font-serif text-3xl md:text-5xl py-12 text-center">{t('Contacto.title')}</h1>
      <FormularioLead />
      <CalendlyModal />
    </main>
  );
}
