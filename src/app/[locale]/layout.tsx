

import { NextIntlClientProvider } from 'next-intl';

import es from '../../messages/es.json';
import en from '../../messages/en.json';





interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}


export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const messagesMap = { es, en } as const;
  type Locale = keyof typeof messagesMap;
  const safeLocale: Locale = (locale in messagesMap ? locale : 'es') as Locale;
  const messages = messagesMap[safeLocale];
  return (
    <NextIntlClientProvider locale={safeLocale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
