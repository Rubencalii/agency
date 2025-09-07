
import { useTranslations } from 'next-intl';

const testimonios = [
  {
    nombre: 'Testimonios.nombre1',
    texto: 'Testimonios.texto1',
    empresa: 'Testimonios.empresa1',
  },
  {
    nombre: 'Testimonios.nombre2',
    texto: 'Testimonios.texto2',
    empresa: 'Testimonios.empresa2',
  },
  {
    nombre: 'Testimonios.nombre3',
    texto: 'Testimonios.texto3',
    empresa: 'Testimonios.empresa3',
  },
];


export default function Testimonios() {
  const t = useTranslations();
  return (
    <section className="bg-bg py-16 border-b border-border">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-accent mb-10">{t('Testimonios.title')}</h2>
        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto">
          {testimonios.map((testi, i) => (
            <div
              key={i}
              className="bg-bg border border-border rounded-xl p-8 shadow-gold min-w-[300px] md:min-w-[320px]"
            >
              <div className="text-muted text-sm mb-2">{t(testi.empresa)}</div>
              <p className="text-text italic mb-4">“{t(testi.texto)}”</p>
              <div className="text-accent font-bold">{t(testi.nombre)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
