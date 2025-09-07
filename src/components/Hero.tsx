export default function Hero() {
  return (
    <section className="relative bg-bg text-white py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <h1 className="font-serif text-4xl md:text-6xl leading-tight">
          Escala tu adquisición con anuncios que convierten.
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">
          En D OR Agency ejecutamos Facebook y TikTok Ads para marcas que buscan crecimiento rentable.
        </p>
        <div className="mt-8 flex gap-3">
          <a className="px-5 py-3 rounded-lg bg-accent text-white font-medium hover:bg-secondary transition" href="/contacto">Agenda una llamada</a>
          <a className="px-5 py-3 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition" href="/contacto">Auditoría gratuita</a>
        </div>
      </div>
    </section>
  );
}
