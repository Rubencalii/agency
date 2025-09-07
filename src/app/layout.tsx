import LocaleLayout from './[locale]/layout';
import './globals.css';

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  return <LocaleLayout params={params}>{children}</LocaleLayout>;
}
