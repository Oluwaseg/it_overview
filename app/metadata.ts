import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OCI Tech Solutions | IT Consulting, Cloud, Security & Staffing',
  description:
    'OCI Tech Solutions delivers enterprise-grade IT services in cloud, cybersecurity, consulting, and staffing.',
  keywords: [
    'IT consulting',
    'cloud services',
    'cybersecurity',
    'Nigeria',
    'Lagos',
  ],
  openGraph: {
    title: 'OCI Tech Solutions',
    description:
      'Enterprise-grade IT services in cloud, cybersecurity, and staffing.',
    url: 'https://ocitech.com',
    siteName: 'OCI Tech Solutions',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/favicon/android-icon-192x192.png',
        width: 192,
        height: 192,
        alt: 'OCI Tech Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ocitech',
  },
};
