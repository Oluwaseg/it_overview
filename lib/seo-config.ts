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
        url: '/images/logo.png',
        width: 600,
        height: 315,
        alt: 'OCI Tech Solutions Logo',
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
        'IT consulting, cloud services, cybersecurity, staffing, Nigeria, OCI Tech Solutions',
    },
    {
      name: 'author',
      content: 'OCI Tech Solutions',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
};

export default defaultSEO;
