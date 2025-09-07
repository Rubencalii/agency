export default function LogosEmpresas() {
  return (
    <section className="bg-bg py-10 border-b border-border">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-col items-center">
        <h2 className="font-serif text-2xl md:text-3xl text-accent mb-6">Empresas que confían en nosotros</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full items-center justify-items-center">
          {/* Sustituye los src por los logos reales de tus clientes */}
          <img src="/logos/logo1.svg" alt="Logo Cliente 1" className="h-10 grayscale hover:grayscale-0 transition" />
          <img src="/logos/logo2.svg" alt="Logo Cliente 2" className="h-10 grayscale hover:grayscale-0 transition" />
          <img src="/logos/logo3.svg" alt="Logo Cliente 3" className="h-10 grayscale hover:grayscale-0 transition" />
          <img src="/logos/logo4.svg" alt="Logo Cliente 4" className="h-10 grayscale hover:grayscale-0 transition" />
          <img src="/logos/logo5.svg" alt="Logo Cliente 5" className="h-10 grayscale hover:grayscale-0 transition" />
        </div>
      </div>
    </section>
  );
}
