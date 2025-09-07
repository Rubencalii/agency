import { NextIntlClientProvider } from 'next-intl';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  let messages;
  try {
    messages = require(`../messages/${locale}.json`);
  } catch (error) {
    messages = require('../messages/es.json');
  }
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
