export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border py-8 mt-16 text-muted text-sm">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} D OR Agency. Todos los derechos reservados.
        </div>
        <div className="flex gap-4">
          <a href="mailto:cargonza2412@gmail.com" className="hover:text-accent">cargonza2412@gmail.com</a>
          <a href="/legal/aviso-legal" className="hover:text-accent">Aviso Legal</a>
          <a href="/legal/privacidad" className="hover:text-accent">Privacidad</a>
          <a href="/legal/cookies" className="hover:text-accent">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
