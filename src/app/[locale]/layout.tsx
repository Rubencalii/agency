

import { NextIntlClientProvider } from 'next-intl';

import es from '../../messages/es.json';
import en from '../../messages/en.json';






type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const messagesMap = { es, en } as const;
  const locale = params.locale as keyof typeof messagesMap;
  const messages = messagesMap[locale] || messagesMap['es'];
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
