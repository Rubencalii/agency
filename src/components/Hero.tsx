import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();
  return (
    <section className="bg-bg text-center py-16 border-b border-border">
      <h1 className="font-serif text-4xl md:text-6xl mb-6 text-accent">{t('Hero.title')}</h1>
      <p className="text-lg text-muted max-w-2xl mx-auto mb-8">{t('Hero.subtitle')}</p>
      <a href="/contacto" className="inline-block px-8 py-4 rounded-lg bg-accent text-white font-medium text-lg shadow-gold hover:scale-105 transition-transform">{t('Hero.cta')}</a>
    </section>
  );
}
