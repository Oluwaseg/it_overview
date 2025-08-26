import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import '../public/styles/globals.css';

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
          href='https://unpkg.com/aos@2.3.1/dist/aos.css'
          rel='stylesheet'
        />
        <title>OCI Tech Solutions Limited - Enterprise IT Services</title>
        <meta
          name='description'
          content='Leading IT solutions provider since 1997. Cloud infrastructure, consulting, staffing, and security services for enterprises across multiple industries.'
        />
      </Head>
      <div
        className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Navigation />
        <main className='min-h-screen overflow-hidden'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
