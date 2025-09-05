import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { ScrollToTop } from '@/components/scroll-to-top';
import defaultSEO from '@/lib/seo-config';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Montserrat, Poppins } from 'next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';
import '../public/styles/globals.css';
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

declare global {
  interface Window {
    AOS: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if (window.AOS) {
          window.AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            disable: false,
          });
        }
      };
    }
  }, []);

  return (
    <>
      <Head>
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
      </Head>
      {/* Default SEO config */}
      <DefaultSeo {...defaultSEO} />
      <div
        className={`font-sans antialiased ${poppins.variable} ${montserrat.variable}`}
      >
        <Navigation />
        <main className='min-h-screen overflow-hidden'>
          <Component {...pageProps} />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default MyApp;
