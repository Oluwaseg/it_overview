import AOSInitializer from '@/lib/aos-initializer';
import { Montserrat, Poppins } from 'next/font/google';
import { Footer } from '../components/footer';
import { Navigation } from '../components/navigation';
import { ScrollToTop } from '../components/scroll-to-top';
import '../public/styles/globals.css';
import { metadata } from './metadata';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700'],
});

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/manifest.json' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta
          name='msapplication-TileImage'
          content='/favicon/ms-icon-144x144.png'
        />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body
        className={`font-sans antialiased ${poppins.variable} ${montserrat.variable}`}
      >
        <AOSInitializer />
        <Navigation />
        <main className='min-h-screen overflow-hidden'>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
