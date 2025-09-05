import { DefaultSeoProps } from 'next-seo';

const defaultSEO: DefaultSeoProps = {
  title: 'OCI Tech Solutions | IT Consulting, Cloud, Security & Staffing',
  description:
    'OCI Tech Solutions delivers enterprise-grade IT services in cloud, cybersecurity, consulting, and staffing for businesses in Nigeria and globally.',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://ocitech.com',
    site_name: 'OCI Tech Solutions',
    title: 'OCI Tech Solutions | IT Consulting, Cloud, Security & Staffing',
    description:
      'OCI Tech Solutions delivers enterprise-grade IT services in cloud, cybersecurity, consulting, and staffing for businesses in Nigeria and globally.',
    images: [
      {
        url: '/favicon/android-icon-192x192.png',
        width: 192,
        height: 192,
        alt: 'OCI Tech Solutions Favicon',
      },
      {
        url: '/favicon/apple-icon-180x180.png',
        width: 180,
        height: 180,
        alt: 'OCI Tech Solutions Apple Icon',
      },
      {
        url: '/favicon/favicon-96x96.png',
        width: 96,
        height: 96,
        alt: 'OCI Tech Solutions Favicon',
      },
    ],
  },
  twitter: {
    handle: '@ocitech',
    site: '@ocitech',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'IT consulting, cloud services, cybersecurity, staffing, Nigeria, OCI Tech Solutions, digital transformation, enterprise IT, Lagos',
    },
    {
      name: 'author',
      content: 'OCI Tech Solutions',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
    {
      name: 'msapplication-TileColor',
      content: '#ffffff',
    },
  ],
};

export default defaultSEO;
