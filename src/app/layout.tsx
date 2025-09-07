import { notFound } from 'next/navigation';
import LocaleLayout from './[locale]/layout';
import './globals.css';

const locales = ['es', 'en'];

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  if (!locales.includes(params.locale)) notFound();
  return <LocaleLayout params={params}>{children}</LocaleLayout>;
}
