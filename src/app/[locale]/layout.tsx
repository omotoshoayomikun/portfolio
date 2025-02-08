import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Providers } from '../providers';

import { Montserrat, Plus_Jakarta_Sans, Inter } from 'next/font/google'

const PlusJakartaSans = Inter({subsets: ['latin']})

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={`${PlusJakartaSans.className}`}>
        <NextIntlClientProvider messages={messages}>
        <Providers>
          {children}
        </Providers>
        </NextIntlClientProvider>
       
      </body>
    </html>
  );
}