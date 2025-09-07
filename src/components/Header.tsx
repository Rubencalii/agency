import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/90 border-b border-border shadow-gold">
      <nav className="max-w-[1160px] mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl text-accent font-bold tracking-tight">D OR Agency</Link>
        <ul className="flex gap-6 text-base font-medium">
          <li><Link href="/servicios">Servicios</Link></li>
          <li><Link href="/casos-de-exito">Casos de Éxito</Link></li>
          <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contacto" className="bg-accent text-black px-4 py-2 rounded-lg">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
